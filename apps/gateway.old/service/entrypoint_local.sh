#!/bin/bash

# Run migrations and store the exit code
npm run typeorm:run
MIGRATION_EXIT_CODE=$?

# Check if migrations failed
if [ $MIGRATION_EXIT_CODE -ne 0 ]; then
    echo "❌ Database migrations failed! Check the logs above."
    exit $MIGRATION_EXIT_CODE
fi

# If we get here, migrations succeeded, so start the dev server
echo "✅ Migrations successful - starting dev server..."
npm run start:dev
