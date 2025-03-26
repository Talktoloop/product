FROM public.ecr.aws/lambda/nodejs:20


COPY index.js ${LAMBDA_TASK_ROOT}
COPY templates/ ${LAMBDA_TASK_ROOT}/templates/


CMD [ "index.handler" ]
