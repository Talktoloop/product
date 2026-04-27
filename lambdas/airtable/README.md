# AirTable Management Lambdas

Container-image Lambdas migrated from `iac-aws-airtable-management` (CDK / TypeScript) into the product monorepo as plain JavaScript.

These Lambdas expose admin operations called by **AirTable automation scripts** (not by the product apps). They write to the same MySQL database used by `apps/gateway` and `apps/ivr`, and sync state back to AirTable.

## Layout

```
airtable/
├── shared/                  ← single source of truth for helpers + service classes
│   ├── helpers/
│   │   ├── logger.js
│   │   └── date-mapper.js
│   └── services/
│       ├── db.js            ← MySQL pool + DB queries
│       ├── airtable.js      ← AirTable REST client (axios + rate limiter)
│       ├── redis.js         ← Redis pub/sub helper (used by user_invite)
│       └── cognito.js       ← Cognito admin operations
├── authorizer/              ← API Gateway custom authorizer (Basic token)
├── user_update/
├── user_invite/
├── user_accept/
├── user_reject/
├── user_suspend/
├── user_unsuspend/
├── organisation_create/
├── organisation_update/
├── organisation_link/
├── ACTIVATION.md            ← how to wire up triggers in Terraform
└── README.md
```

## Build pattern

Each Lambda directory is its own deployable container image. The CodePipeline `app_path` points at one of the leaf folders (e.g. `lambdas/airtable/user_update`).

The `shared/` folder is the source of truth in git. Each Lambda's `buildspec.yml` copies it into the build context just before `docker build`, so the resulting image is self-contained:

```
buildspec.yml pre_build:
  cp -r ${CODEBUILD_SRC_DIR}/lambdas/airtable/shared ${CODEBUILD_SRC_DIR}/${APP_PATH}/shared

Dockerfile:
  COPY shared/ ${LAMBDA_TASK_ROOT}/shared/

handler:
  const { DbService } = require('./shared/services/db');
```

Local dev: symlink `shared` into the Lambda dir (`ln -s ../shared shared`) before running locally — gitignored.

## Environment variables

Standardised on UPPERCASE_SNAKE_CASE matching the `cloud/` Terraform pattern. All values are injected by Terraform at deploy time — secrets via Secrets Manager ARNs, infrastructure values as plain env vars.

| Variable | Source | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Terraform output (RDS MySQL) | All handlers |
| `DB_USERNAME`, `DB_PASSWORD` | Secrets Manager ARN | All handlers |
| `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`, `REDIS_SCHEMA` | Terraform output (ElastiCache) | `user_invite` |
| `AIRTABLE_API_KEY` | Secrets Manager ARN | All handlers except `authorizer`, `user_suspend`, `user_unsuspend` |
| `AIRTABLE_ORGANISATIONS_URL` | Plain env var | All handlers using AirTable |
| `AIRTABLE_USERS_URL` | Plain env var | All handlers using AirTable |
| `AIRTABLE_COUNTRIES_URL` | Plain env var | `organisation_create` |
| `BASIC_TOKEN` | Secrets Manager ARN | `authorizer` |
| `COGNITO_USER_POOL_ID`, `COGNITO_REGION` | Plain env var | `user_suspend`, `user_unsuspend` |

## Triggers (currently NOT wired up)

The Terraform that provisions these Lambdas does not yet attach API Gateway routes or other event sources. See [ACTIVATION.md](ACTIVATION.md) for the playbook to turn each trigger on after dev validation.
