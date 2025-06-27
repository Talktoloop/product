FROM node as build-stage

ARG env=staging

# set working directory
RUN mkdir /usr/src/ourloop-ui
WORKDIR /usr/src/ourloop-ui

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/ourloop-ui/node_modules/.bin:$PATH

COPY package.json /usr/src/ourloop-ui/package.json
COPY yarn.lock /usr/src/ourloop-ui/yarn.lock

# install dependencies
RUN yarn cache clean --all
RUN yarn install --check-cache

# add app
COPY . /usr/src/ourloop-ui
COPY nginx.conf /usr/src

# generate build
RUN yarn run build:prod -- --configuration=$env


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

RUN cd /usr/share/nginx/html

# copy artifact build from the 'build environment'
COPY --from=build-stage /usr/src/ourloop-ui/dist/ourloop-ui /usr/share/nginx/html

COPY --from=build-stage /usr/src/nginx.conf /usr/share/nginx/nginx.conf

# nginx startup
ENTRYPOINT ["nginx", "-g", "daemon off;", "-c", "/usr/share/nginx/nginx.conf"]
