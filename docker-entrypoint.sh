#!/bin/sh
set -e

# Push schema on boot when explicitly asked (first run / after schema changes).
if [ "$PRISMA_DB_PUSH" = "1" ] && [ -n "$DATABASE_URL" ]; then
  echo "→ prisma db push"
  ./node_modules/.bin/prisma db push --skip-generate
fi

exec "$@"
