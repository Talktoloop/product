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
│       ├── db.js
│       └── mailjet.js
├── registration_scheduler/
├── loop_advocate_scheduler/
├── ACTIVATION.md
└── README.md
```

## Build pattern

Same as `airtable/`: each Lambda has its own image, the `buildspec.yml` copies `shared/` into the build context before `docker build`.

## Environment variables

| Variable | Source | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Terraform output (RDS MySQL) | Both |
| `DB_USERNAME`, `DB_PASSWORD` | Secrets Manager ARN | Both |
| `MAILJET_API_KEY`, `MAILJET_API_SECRET` | Secrets Manager ARN | Both |
| `MAILJET_SENDER_EMAIL` | Plain env var | Both |
| `MAILJET_SENDER_NAME` | Plain env var (optional, defaults to `Loop`) | Both |
| `TRIGGER_INTERVAL_HOURS` | Plain env var (e.g. `"4"`) | Both — must match EventBridge schedule |
| `SHOULD_REGISTRATION_EMAILS_BE_SEND` | Plain env var (`"true"`/`"false"`) | `registration_scheduler` — kill switch |
| `LOOP_ADVOCATE_BETA_RECIPIENTS` | Plain env var (comma-separated emails) | `loop_advocate_scheduler` — empty string = send to all |

## Triggers (currently NOT wired up)

See [ACTIVATION.md](ACTIVATION.md) for the EventBridge schedule activation steps.
