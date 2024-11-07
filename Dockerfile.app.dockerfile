FROM node:20-alpine AS base
# Take the app name as an argument
ARG APP_NAME
ARG APP_PORT

# Setup env variabless for yarn and nextjs
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.2.2

# update dependencies, add libc6-compat and dumb-init to the base image
RUN apk update && apk upgrade && apk add --no-cache libc6-compat && apk add dumb-init

# install and use yarn 4.x
RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

# add the user and group we'll need in our final image
RUN addgroup --system --gid 1001 nodejs

FROM base as build

WORKDIR /usr/src/product
COPY core ./core
COPY layers ./layers
COPY package.json yarn.lock .yarnrc.yml turbo.json ./
COPY apps/${APP_NAME}/package.json ./apps/${APP_NAME}/
COPY .yarn ./.yarn

RUN yarn install --immutable

FROM build as app

ARG APP_NAME
ARG ADDITIONAL_PORT
ARG APP_PORT

# Copy the app source code
COPY ./apps/${APP_NAME} ./apps/${APP_NAME}

# Expose the port the app runs on
EXPOSE $APP_PORT

# Expose the additional port the app runs on
EXPOSE $ADDITIONAL_PORT

ENV PACKAGE_NAME="@ourloop/product-app-${APP_NAME}"

# Start the app
CMD yarn workspace "${PACKAGE_NAME}" run dev
