# AirTable Sync Lambdas

Container-image Lambdas migrated from `serverless-functions/translations` (SAM / TypeScript) into the product monorepo as plain JavaScript.

These Lambdas run on EventBridge schedules and **pull from AirTable → push to MySQL DB** (and vice versa). They're the opposite direction of `product/lambdas/airtable/` (which is triggered by AirTable scripts).

## Layout

```
airtable_sync/
├── shared/
│   ├── helpers/logger.js
│   └── services/
│       ├── secrets.js       ← AWS Secrets Manager resolver (cold-start cache)
│       ├── db.js            ← MySQL queries used by the 3 sync Lambdas
│       └── airtable.js      ← AirTable REST client (axios + pagination)
├── case_manager_sync/       ← scheduled rate(15 minutes), syncs sensitive story notes
├── organisations_sync/      ← scheduled rate(60 minutes), bidirectional org sync
├── organisation_user_save/  ← scheduled rate(15 minutes), bidirectional user sync
├── ACTIVATION.md
└── README.md
```

## Build pattern

Same as `airtable/` and `scheduler/`: each Lambda dir is its own Docker build context. The `buildspec.yml` copies `shared/` in just before `docker build`.

## Environment variables

| Variable | Kind | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Plain (Terraform output from RDS MySQL) | All 3 |
| `SECRETS_DB_USERNAME`, `SECRETS_DB_PASSWORD` | Secret ARN | All 3 |
| `SECRETS_AIRTABLE_API_KEY` | Secret ARN | All 3 |
| `AIRTABLE_BASE` | Plain (e.g. `app5Kv4sGvDDb9FqE`) | All 3 — used to construct API URLs |

The Lambda execution role needs `secretsmanager:GetSecretValue` for each ARN it resolves.

## Triggers

| Lambda | EventBridge schedule (production) |
|---|---|
| `case_manager_sync` | `rate(15 minutes)` |
| `organisations_sync` | `rate(60 minutes)` |
| `organisation_user_save` | `rate(15 minutes)` |

See [ACTIVATION.md](ACTIVATION.md) for trigger wiring details.
