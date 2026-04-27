# Scheduler Lambdas — Activation Playbook

The Lambdas are deployed but have no EventBridge schedule attached. This is the recipe for turning each schedule on.

---

## Prerequisites

### 1. VPC + DB access
Same as AirTable Lambdas — both schedulers need to query the MySQL database in private subnets.

In `cloud/apps/lambda_scheduler_*/main.tf`, set:

```hcl
vpc_config {
  subnet_ids         = module.network.private_subnets
  security_group_ids = [aws_security_group.scheduler_lambda.id]
}
```

In `cloud/shared/security/main.tf`, add the SG to the MySQL allow-list:

```hcl
rds_mysql_allowed_security_group_ids = {
  ...existing entries...,
  scheduler_lambdas = aws_security_group.scheduler_lambda.id,
}
```

### 2. Mailjet sender configuration
Confirm the verified sender email in Mailjet (`MAILJET_SENDER_EMAIL` env var). It must be allowed to send from the configured Mailjet account or every send will fail with HTTP 401.

### 3. Confirm the kill switch and beta list values per environment
Add to `cloud/environments/<env>/main.tf` `lambda_config`:

```hcl
lambda_scheduler_registration = {
  env_vars = {
    SHOULD_REGISTRATION_EMAILS_BE_SEND = "false"   # start disabled
    TRIGGER_INTERVAL_HOURS             = "4"
  }
}
lambda_scheduler_loop_advocate = {
  env_vars = {
    LOOP_ADVOCATE_BETA_RECIPIENTS = "qa@yourdomain.com"   # restrict to QA inbox in dev
    TRIGGER_INTERVAL_HOURS        = "4"
  }
}
```

This way the Lambda is wired up but cannot send mail until you flip the env var.

---

## Activation

### `registration_scheduler`

1. Add EventBridge rule to `cloud/apps/lambda_scheduler_registration/main.tf`:

   ```hcl
   resource "aws_cloudwatch_event_rule" "schedule" {
     name                = "${var.environment}-registration-scheduler"
     schedule_expression = "rate(4 hours)"
     state               = "ENABLED"
   }

   resource "aws_cloudwatch_event_target" "lambda" {
     rule = aws_cloudwatch_event_rule.schedule.name
     arn  = module.lambda_app.lambda_arn
   }

   resource "aws_lambda_permission" "eventbridge" {
     statement_id  = "AllowExecutionFromEventBridge"
     action        = "lambda:InvokeFunction"
     function_name = module.lambda_app.lambda_name
     principal     = "events.amazonaws.com"
     source_arn    = aws_cloudwatch_event_rule.schedule.arn
   }
   ```

2. `terraform apply` in dev. Wait for the next tick (or manually `aws events put-events`).
3. **Smoke test**: keep `SHOULD_REGISTRATION_EMAILS_BE_SEND=false` for the first run. Inspect CloudWatch logs to confirm DB query returned the expected row count.
4. Set `SHOULD_REGISTRATION_EMAILS_BE_SEND=true` in dev → wait for next tick → check the QA inbox.
5. Promote to staging, then production. In production, **disable the legacy CDK schedule rule** (set state to `DISABLED`) before flipping the new flag to `true`, otherwise emails go out twice.

### `loop_advocate_scheduler` (currently disabled in legacy)

The legacy stack has this Lambda commented out. We're migrating the code so it's ready, but keep it disabled until product confirms they want to relaunch it.

To activate later: same EventBridge wiring as above, plus narrow `LOOP_ADVOCATE_BETA_RECIPIENTS` to a small recipient list for the first week.

---

## Cutover

1. **Dev**: deploy new schedule, observe one full cycle (4 hours), confirm parity with legacy log output.
2. **Production**:
   1. Disable legacy CDK schedule rule (`aws events disable-rule --name <legacy-rule>`)
   2. Set `SHOULD_REGISTRATION_EMAILS_BE_SEND=true` on the new Lambda
   3. Watch CloudWatch metrics (`Invocations`, `Errors`) for 24h
   4. After a week of clean operation: `cdk destroy iac-aws-scheduler` → archive repo

## Rollback

Both old and new Lambdas can coexist. To roll back: re-enable the legacy rule, disable the new one (`SHOULD_REGISTRATION_EMAILS_BE_SEND=false`). No data loss possible since these are write-only outbound email Lambdas.

## Risks to watch

| Risk | Mitigation |
|---|---|
| Double-send during cutover (old + new both fire) | Always disable old before enabling new |
| Mailjet rate limit | Same sender as legacy, same recipient pool — no change in volume |
| Time skew between EventBridge tick and `TRIGGER_INTERVAL_HOURS` | Keep them identical (`rate(4 hours)` ↔ `TRIGGER_INTERVAL_HOURS=4`) |
| QA recipient missed in beta list | Verify `LOOP_ADVOCATE_BETA_RECIPIENTS` is set in dev/staging before activating that Lambda |
