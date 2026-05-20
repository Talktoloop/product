# AirTable Lambdas — Activation Playbook

When Session 1 (code migration) is complete, the Lambdas are deployed but have **no trigger attached**. Nothing calls them. This document is the recipe for turning each one on, in dev first, then prod.

---

## Prerequisites (do these once before activating any AirTable Lambda)

### 1. Confirm the Basic auth token

The `BASIC_TOKEN` secret in Secrets Manager (`cloud/shared/secrets/main.tf`) must match the value used by AirTable automation scripts. To verify:

```bash
aws secretsmanager get-secret-value \
  --secret-id production-BASIC_TOKEN \
  --query SecretString --output text
```

Compare against the `Authorization: Basic <token>` header used by every AirTable script (see step 2). If they differ, decide upfront: rotate the AirTable scripts to the new token, or write the existing token into Secrets Manager.

### 2. Inventory AirTable automation scripts

Log into AirTable → Automations panel → for every script that calls a Lambda URL, capture:

- Script name
- Source URL (current API Gateway endpoint)
- HTTP method
- Payload schema
- Basic token in use

Save the list to `docs/migration/airtable-automation-inventory.md` in this repo. Without this list the cutover is blind — you cannot update what you cannot see.

### 3. Build the API Gateway in Terraform

Add a new module under `cloud/apps/airtable_api_gateway/` that creates:

- `aws_api_gateway_rest_api` named `${var.environment}-airtable-management`
- A `aws_api_gateway_authorizer` of type `TOKEN`, identity source `method.request.header.Authorization`, calling the `authorizer` Lambda
- One `aws_api_gateway_resource` + `aws_api_gateway_method` per endpoint (table below)
- A `aws_api_gateway_deployment` and `aws_api_gateway_stage`
- A custom domain (`airtable-mgmt.${var.domain_name}`) backed by an ACM cert + Route 53 alias

| Lambda module | HTTP | Resource path |
|---|---|---|
| `lambda_airtable_user_update` | PATCH | `/user` |
| `lambda_airtable_user_invite` | POST | `/user/invite` |
| `lambda_airtable_user_accept` | POST | `/user/accept` |
| `lambda_airtable_user_reject` | POST | `/user/reject` |
| `lambda_airtable_user_suspend` | POST | `/user/suspend` |
| `lambda_airtable_user_unsuspend` | POST | `/user/unsuspend` |
| `lambda_airtable_organisation_create` | POST | `/organisation` |
| `lambda_airtable_organisation_update` | PATCH | `/organisation` |
| `lambda_airtable_organisation_link` | POST | `/organisation/link` |

For each route also add an `aws_lambda_permission` allowing `apigateway.amazonaws.com` to invoke that function.

### 4. Add VPC + DB security group rules

These Lambdas need to reach RDS MySQL and (for `user_invite`) ElastiCache Redis. Both live in isolated subnets.

In `cloud/apps/lambda_airtable_*/main.tf`, set the Lambda's `vpc_config` to:

```hcl
vpc_config {
  subnet_ids         = module.network.private_subnets
  security_group_ids = [aws_security_group.airtable_lambda.id]
}
```

In `cloud/shared/security/main.tf`, add the new SG to the allow-lists:

```hcl
rds_mysql_allowed_security_group_ids = {
  ...existing entries...,
  airtable_lambdas = aws_security_group.airtable_lambda.id,
}

elasticache_allowed_security_group_ids = {
  ...existing entries...,
  airtable_user_invite = aws_security_group.airtable_lambda.id,
}
```

---

## Activation per Lambda

Each Lambda below follows the same pattern: add the Terraform, `terraform plan` → review → `terraform apply` in dev, smoke test, then promote to staging/prod.

### `authorizer`
- Wired by step 3 above. No standalone activation.
- **Smoke test**: call any AirTable endpoint with the wrong token; expect HTTP 403.

### `user_update` / `user_invite` / `user_accept` / `user_reject` / `user_suspend` / `user_unsuspend`
- Routes attached by step 3 above.
- **Smoke test (dev)**: pick a test user in the dev AirTable → trigger the corresponding automation → verify the dev DB row changes and AirTable status updates.

### `organisation_create` / `organisation_update` / `organisation_link`
- Routes attached by step 3 above.
- **Smoke test (dev)**: create a test organisation in dev AirTable → run the `organisation_create` automation → verify the row appears in the dev DB and AirTable record is patched with the DB ID.

---

## Cutover (per environment)

1. **Dev**: deploy with new API Gateway URL. Update **one** test AirTable automation in the dev base to point at the new URL. Verify end-to-end. Repeat for all 9 automations.
2. **Production cutover window** (announce in advance):
   1. Deploy the new prod API Gateway and Lambdas.
   2. Update production AirTable automations one-by-one with old-as-fallback if your script runner supports it. Otherwise update them all in a single change window (~10 min).
   3. Set the **old** API Gateway in `iac-aws-airtable-management` CDK stack to return HTTP 410 Gone. Keep it deployed for 30 days so any forgotten caller shows up in CloudWatch.
3. After 30 days of zero traffic on the old gateway: `cdk destroy iac-aws-airtable-management` → archive the GitLab repo.

---

## Rollback

If something breaks during cutover:
- AirTable automations: revert the URL change in AirTable Automations panel (no code deploy needed, takes ~60s).
- The old Lambdas in the legacy CDK stack stay live and untouched throughout the cutover — they're the rollback target.

---

## Risks to watch

| Risk | Mitigation |
|---|---|
| Hidden AirTable script we missed in step 2 | Old gateway returning 410 with logs catches it |
| `BASIC_TOKEN` mismatch between secret and AirTable script | Step 1 verifies upfront |
| `user_invite` Redis subscriber gone or changed | Verify someone is still subscribing to `{"cmd":"sendInvitationToUser"}` channel before cutover (likely the gateway service) |
| Lambda VPC cold-start exceeds API Gateway 29s timeout | Old Lambda was VPC too, so behaviour should match — but watch p99 latency in dev for a week |
