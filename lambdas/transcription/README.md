# Transcription Lambda

Migrated from `serverless-functions/translations` (SAM / TypeScript) into the product monorepo as plain JavaScript.

The transcribe Lambda converts IVR audio recordings to text, writes the transcription to MySQL, and triggers per-language translation fan-out via the `translate` Lambda.

## Layout

```
transcription/
├── shared/
│   ├── helpers/logger.js
│   ├── constants/index.js          ← SourceType, TranscriptionStatus, STORY_STATUS
│   └── services/
│       ├── secrets.js              ← AWS Secrets Manager resolver
│       ├── db.js                   ← ivrr_call / story / comment + translation seed
│       ├── s3.js                   ← AWS S3 v3 wrapper (getObject, signed URL)
│       └── transcribe.js           ← AWS Transcribe + Azure Speech routing + translation fan-out
├── transcribe/                     ← single Lambda, two trigger paths
├── ACTIVATION.md
└── README.md
```

## Build pattern

Same as other groups: each Lambda dir is its own Docker build context. The `buildspec.yml` copies `shared/` in just before `docker build`.

## Trigger paths

| Path | Trigger | What it does |
|---|---|---|
| 1 | Direct invoke `{ callId, language }` (typically called from the IVR ECS service after audio upload) | Starts AWS Transcribe job (or Azure Speech for languages in `AZURE_TRANSCRIBE_LANGUAGES`) |
| 2 | EventBridge — AWS Transcribe `Transcribe Job State Change` event with status `COMPLETED` or `FAILED` | Fetches result from S3, saves to DB, fans out translation Lambda invocations |

## Environment variables

| Variable | Kind | Used by |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_DATABASE` | Plain | All paths |
| `SECRETS_DB_USERNAME`, `SECRETS_DB_PASSWORD` | Secret ARN | All paths |
| `BUCKET_NAME` | Plain (S3 bucket holding audio + transcript files) | All paths |
| `TRANSLATE_FUNCTION_NAME` | Plain (name of deployed `translate` Lambda) | Path 2 — fan-out invokes |
| `SECRETS_AZURE_SUBSCRIPTION_TOKEN` | Secret ARN | Azure Speech path only |
| `AZURE_TRANSCRIBE_LANGUAGES` | Plain (JSON array, e.g. `["so","ar"]`) | Routes to Azure for these languages |
| `RECORDING_MINIMUM_LENGTH` | Plain (seconds, default `0`) | Azure path skip threshold |

The Lambda execution role needs:
- `transcribe:StartTranscriptionJob`, `transcribe:GetTranscriptionJob`
- `s3:GetObject` on the audio bucket
- `lambda:InvokeAsync` on the `translate` Lambda
- `secretsmanager:GetSecretValue` for each ARN it resolves

See [ACTIVATION.md](ACTIVATION.md) for trigger wiring details.
