# Translation Lambdas

Container-image Lambdas migrated from `serverless-functions/translations` (SAM / TypeScript) into the product monorepo as plain JavaScript.

These Lambdas translate stories and comments between languages using AWS Translate + Google Cloud Translate, with multi-hop intermediate-language fallback for unsupported language pairs.

## Layout

```
translation/
├── shared/
│   ├── helpers/logger.js
│   ├── constants/index.js          ← SourceType, ProviderType, TranslationStatus, etc.
│   ├── utils/hop.js                ← hop iterator for intermediate-language flows
│   ├── validators/event.js         ← Joi schemas for handler input
│   └── services/
│       ├── secrets.js              ← AWS Secrets Manager resolver (cold-start cache)
│       ├── db.js                   ← MySQL queries
│       ├── translate-aws.js        ← AWS Translate + Comprehend
│       ├── translate-google.js     ← Google Cloud Translate v3
│       └── translate.js            ← orchestrator: hops + provider selection
├── translate/                      ← single-translation Lambda (sync invoke)
├── translate_history_content/      ← daily batch backfill Lambda (cron)
├── ACTIVATION.md
└── README.md
```

## Build pattern

Same as other groups: each Lambda dir is its own Docker build context. The `buildspec.yml` copies `shared/` in just before `docker build`.

## Environment variables

| Variable | Kind | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Plain | Both |
| `SECRETS_DB_USERNAME`, `SECRETS_DB_PASSWORD` | Secret ARN | Both |
| `SECRETS_GOOGLE_CREDENTIALS` | Secret ARN — JSON service-account credentials | Both (Google Translate) |
| `GOOGLE_PROJECT_ID` | Plain (e.g. `ourloop`) | Both |
| `GOOGLE_TRANSLATION_LOCATION` | Plain (default `global`) | Both |
| `AWS_CONTENT_LENGTH_LIMIT` | Plain (default `6000`) | Both — switch threshold AWS → Google |
| `TRANSLATE_FUNCTION_NAME` | Plain — name of the deployed `translate` Lambda | `translate_history_content` (invokes it) |

The Lambda execution role needs `secretsmanager:GetSecretValue` plus `translate:*`, `comprehend:DetectDominantLanguage`, `comprehend:BatchDetectDominantLanguage`, and `lambda:InvokeFunction` / `lambda:InvokeAsync`.

## Triggers

| Lambda | Trigger |
|---|---|
| `translate` | Direct invoke from `translate_history_content` and `transcribe` Lambdas; not scheduled |
| `translate_history_content` | EventBridge `cron(0 3 * * ? *)` daily 3am |

See [ACTIVATION.md](ACTIVATION.md) for trigger wiring details.
