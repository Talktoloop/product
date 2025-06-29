FROM node:22-alpine as build-stage

ARG env=staging

# set working directory
RUN mkdir -p /usr/src/ourloop-ui
WORKDIR /usr/src/ourloop-ui

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH=/usr/src/ourloop-ui/node_modules/.bin:$PATH

COPY package.json /usr/src/ourloop-ui/package.json
COPY yarn.lock /usr/src/ourloop-ui/yarn.lock
COPY .yarnrc.yml /usr/src/ourloop-ui/.yarnrc.yml
COPY .yarn /usr/src/ourloop-ui/.yarn

# install dependencies
RUN corepack enable
RUN yarn install

# add app
COPY . /usr/src/ourloop-ui
# COPY src/assets/config-${env}.json src/assets/config.json
COPY nginx.conf /usr/src

# generate build
RUN yarn run build:prod --configuration=$env


FROM nginx:alpine as final

RUN rm -rf /usr/share/nginx/html/*

RUN cd /usr/share/nginx/html

# copy artifact build from the 'build environment'
COPY --from=build-stage /usr/src/ourloop-ui/dist/ourloop-ui /usr/share/nginx/html

COPY --from=build-stage /usr/src/nginx.conf /usr/share/nginx/nginx.conf

# nginx startup
ENTRYPOINT ["nginx", "-g", "daemon off;", "-c", "/usr/share/nginx/nginx.conf"]
