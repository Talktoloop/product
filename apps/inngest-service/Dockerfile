FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies using Yarn
COPY package.json yarn.lock ./

ARG NPM_TOKEN
ENV ENV_NPM_TOKEN=$NPM_TOKEN
RUN npm config set @ourloop:registry https://gitlab.com/api/v4/packages/npm/
RUN npm config set '//gitlab.com/api/v4/packages/npm/:_authToken' $ENV_NPM_TOKEN
RUN npm config set '//gitlab.com/api/v4/projects/24487110/packages/npm/:_authToken' $ENV_NPM_TOKEN

RUN yarn install --production

COPY . .

FROM node:22-alpine as final

WORKDIR /app

COPY --from=build /app /app

EXPOSE 5000

ENV NODE_ENV=production

CMD ["yarn", "run", "start"]
