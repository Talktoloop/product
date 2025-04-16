FROM public.ecr.aws/lambda/nodejs:20

COPY package.json package-lock.json ${LAMBDA_TASK_ROOT}/
WORKDIR ${LAMBDA_TASK_ROOT}
RUN npm install

COPY index.js ${LAMBDA_TASK_ROOT}
COPY templates/ ${LAMBDA_TASK_ROOT}/templates/

CMD [ "index.handler" ]
