FROM node:20-slim as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-slim as final

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/node_modules /app/node_modules

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"] 