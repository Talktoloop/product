FROM public.ecr.aws/docker/library/node:16-alpine3.17

RUN apk add --no-cache build-base libssl1.1 jq python3 py3-pip py3-setuptools groff less bash

# Update pip and install awscli
RUN pip3 install --no-cache-dir --upgrade pip awscli \
    && rm -rf /var/cache/apk/*

RUN mkdir -p /app

COPY . /var/www/backend
WORKDIR /var/www/backend

RUN chmod +x /var/www/backend/entrypoint.sh

ARG NPM_TOKEN
ENV ENV_NPM_TOKEN=$NPM_TOKEN

EXPOSE 5002

RUN env
RUN npm config set @ourloop:registry https://gitlab.com/api/v4/packages/npm/
RUN npm config set '//gitlab.com/api/v4/packages/npm/:_authToken' $ENV_NPM_TOKEN
RUN npm config set '//gitlab.com/api/v4/projects/24487110/packages/npm/:_authToken' $ENV_NPM_TOKEN
RUN yarn
RUN yarn run build

ENTRYPOINT /var/www/backend/entrypoint.sh
