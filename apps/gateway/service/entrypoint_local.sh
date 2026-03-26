#!/bin/bash
set -o pipefail

# Ensure dist exists before running TypeORM migrations.
# `typeorm:run` uses `dist/config/typeorm.js`, so `yarn build` must happen first.
echo "Building gateway (for dist/config/typeorm.js) ..."
yarn build

# Run migrations and store the exit code
yarn typeorm:run
MIGRATION_EXIT_CODE=$?

# Check if migrations failed
if [ $MIGRATION_EXIT_CODE -ne 0 ]; then
    echo "❌ Database migrations failed! Check the logs above."
    exit $MIGRATION_EXIT_CODE
fi

# If we get here, migrations succeeded, so start the dev server
echo "✅ Migrations successful - starting dev server..."
yarn start:dev
