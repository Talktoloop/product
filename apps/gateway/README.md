# How to start

## development mode

1. Use file https://gitlab.com/ourloop/archived/backend/devops/-/blob/develop/docker-compose-dev.yml to run relational database and Redis locally.
2. go to `service` directory
3. copy `env.tpl` to `.env`
4. create `.npmrc` with content

```
//registry.npmjs.org/:_authToken=sharedToken
@ourloop-aws:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=sharedToken
//gitlab.com/api/v4/projects/24487110/packages/npm/:_authToken=sharedToken
```

To get sharedToken go to https://gitlab.com/ourloop/backend/shared/-/settings/ci_cd and copy the value of the `CI_JOB_TOKEN` variable.

5. install dependencies
6. run command `npm run start:dev`

## production mode

1. go to `service` directory
2. copy `env.tpl` to `.env`
3. we will share with you authentication token
4. build container with command: `docker build -f Dockerfile --build-arg NPM_TOKEN=sharedToken .`
5. run application with `docker run -d -p 5000:5000 --name gateway your-image-id`
