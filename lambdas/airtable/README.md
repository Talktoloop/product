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
│       ├── secrets.js       ← AWS Secrets Manager resolver (cold-start cache)
│       ├── db.js            ← MySQL pool + DB queries (resolves SECRETS_DB_USERNAME/PASSWORD)
│       ├── airtable.js      ← AirTable REST client (resolves SECRETS_AIRTABLE_API_KEY)
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

Two kinds of env vars:

- **Plain values** — set directly by Terraform at deploy time (DB host, AirTable URLs, etc.)
- **Secret ARN references** — env var name prefixed with `SECRETS_`, value is the AWS Secrets Manager ARN. Resolved at Lambda cold-start by [shared/services/secrets.js](shared/services/secrets.js); cached per-ARN inside the execution context for the lifetime of the warm container.

| Variable | Kind | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Plain (Terraform output from RDS MySQL) | All DB handlers |
| `SECRETS_DB_USERNAME`, `SECRETS_DB_PASSWORD` | Secret ARN | All DB handlers |
| `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`, `REDIS_SCHEMA` | Plain (Terraform output from ElastiCache) | `user_invite` |
| `AIRTABLE_ORGANISATIONS_URL`, `AIRTABLE_USERS_URL` | Plain | All handlers using AirTable |
| `AIRTABLE_COUNTRIES_URL` | Plain | `organisation_create` |
| `SECRETS_AIRTABLE_API_KEY` | Secret ARN | All handlers using AirTable |
| `SECRETS_BASIC_TOKEN` | Secret ARN | `authorizer` |
| `COGNITO_USER_POOL_ID`, `COGNITO_REGION` | Plain | `user_suspend`, `user_unsuspend` |

The Lambda execution role must include `secretsmanager:GetSecretValue` for each ARN it resolves.

## Triggers (currently NOT wired up)

The Terraform that provisions these Lambdas does not yet attach API Gateway routes or other event sources. See [ACTIVATION.md](ACTIVATION.md) for the playbook to turn each trigger on after dev validation.
