FROM node:20 as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine

ARG REDIS_URL
ENV REDIS_URL=${REDIS_URL}

WORKDIR /app

COPY --from=builder /app/.output /app

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", "server/index.mjs"] 