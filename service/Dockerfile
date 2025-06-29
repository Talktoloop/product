FROM public.ecr.aws/docker/library/node:20-alpine3.17 as final

RUN apk add --no-cache build-base libssl1.1 jq python3 py3-pip py3-setuptools groff less bash

# Symlink excluding exec error entrypoint.sh
#RUN ln -sf /usr/bin/bash /bin/bash

# Update pip and install awscli
RUN pip3 install --no-cache-dir --upgrade pip awscli \
  && rm -rf /var/cache/apk/*

WORKDIR /var/www/backend

# Copy package.json and yarn.lock first for better caching
COPY package.json yarn.lock ./

# Configure npm registry and authentication
ARG NPM_TOKEN
ENV ENV_NPM_TOKEN=$NPM_TOKEN

RUN npm config set @ourloop:registry https://gitlab.com/api/v4/packages/npm/ && \
    npm config set '//gitlab.com/api/v4/packages/npm/:_authToken' $ENV_NPM_TOKEN && \
    npm config set '//gitlab.com/api/v4/projects/24487110/packages/npm/:_authToken' $ENV_NPM_TOKEN

RUN yarn install --frozen-lockfile && \
    yarn cache clean && \
    rm -f .npmrc

# Copy the rest of the application
COPY . .


RUN chmod +x ./entrypoint.sh

# Build the application
RUN yarn run build

EXPOSE 5002

ENTRYPOINT ["./entrypoint.sh"]
