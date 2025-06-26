# First stage: builder
FROM public.ecr.aws/docker/library/node:20-alpine3.17 as builder

# Install system dependencies
RUN apk add --no-cache build-base libssl1.1 jq python3 py3-pip py3-setuptools groff less bash

# Update pip and install awscli
RUN pip3 install --no-cache-dir --upgrade pip awscli \
    && rm -rf /var/cache/apk/*

WORKDIR /var/www/backend
COPY . .

# Set environment variables
ARG NPM_TOKEN
ENV ENV_NPM_TOKEN=$NPM_TOKEN
RUN npm config set @ourloop:registry https://gitlab.com/api/v4/packages/npm/
RUN npm config set '//gitlab.com/api/v4/packages/npm/:_authToken' $ENV_NPM_TOKEN
RUN npm config set '//gitlab.com/api/v4/projects/24487110/packages/npm/:_authToken' $ENV_NPM_TOKEN

# Install and build
RUN yarn install --production=false --frozen-lockfile --non-interactive \
    && yarn run build \
    && yarn cache clean

# Final stage
FROM public.ecr.aws/docker/library/node:20-alpine3.17 as final

# Install runtime dependencies
RUN apk add --no-cache bash

WORKDIR /var/www/backend
COPY --from=builder /var/www/backend .

# Copy only production node_modules
COPY --from=builder /var/www/backend/node_modules ./node_modules

# Make entrypoint executable
RUN chmod +x /var/www/backend/entrypoint.sh

EXPOSE 5000
ENTRYPOINT ["/var/www/backend/entrypoint.sh"]
