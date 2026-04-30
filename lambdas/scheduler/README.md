# Scheduler Lambdas

Container-image Lambdas migrated from `iac-aws-scheduler` (CDK / TypeScript) into the product monorepo as plain JavaScript.

These Lambdas run on an EventBridge schedule (every 4 hours) and send transactional emails via Mailjet based on user activity in the MySQL database.

## Layout

```
scheduler/
├── shared/
│   ├── helpers/
│   │   ├── logger.js
│   │   ├── date-to-time.js
│   │   └── days-after-event.js
│   ├── constants/
│   │   └── mailjet-templates.js
│   └── services/
│       ├── secrets.js   ← AWS Secrets Manager resolver (cold-start cache)
│       ├── db.js        ← resolves SECRETS_DB_USERNAME / SECRETS_DB_PASSWORD
│       └── mailjet.js   ← reads MAILJET_API_KEY (plain) + resolves SECRETS_MAILJET_API_SECRET
├── registration_scheduler/
├── loop_advocate_scheduler/
├── ACTIVATION.md
└── README.md
```

## Build pattern

Same as `airtable/`: each Lambda has its own image, the `buildspec.yml` copies `shared/` into the build context before `docker build`.

## Environment variables

Two kinds of env vars:

- **Plain values** — set directly by Terraform (DB host, schedule interval, etc.)
- **Secret ARN references** — env var name prefixed with `SECRETS_`, value is the AWS Secrets Manager ARN. Resolved at Lambda cold-start by [shared/services/secrets.js](shared/services/secrets.js).

| Variable | Kind | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Plain (Terraform output from RDS MySQL) | Both |
| `SECRETS_DB_USERNAME`, `SECRETS_DB_PASSWORD` | Secret ARN | Both |
| `MAILJET_API_KEY` | Plain (mirrors gateway pattern) | Both |
| `SECRETS_MAILJET_API_SECRET` | Secret ARN | Both |
| `MAILJET_SENDER_EMAIL` | Plain | Both |
| `MAILJET_SENDER_NAME` | Plain (optional, defaults to `Loop`) | Both |
| `TRIGGER_INTERVAL_HOURS` | Plain (e.g. `"4"`) | Both — must match EventBridge schedule |
| `SHOULD_REGISTRATION_EMAILS_BE_SEND` | Plain (`"true"`/`"false"`) | `registration_scheduler` — kill switch |
| `LOOP_ADVOCATE_BETA_RECIPIENTS` | Plain (comma-separated emails) | `loop_advocate_scheduler` — empty string = send to all |

The Lambda execution role must include `secretsmanager:GetSecretValue` for each ARN it resolves.

## Triggers (currently NOT wired up)

See [ACTIVATION.md](ACTIVATION.md) for the EventBridge schedule activation steps.
