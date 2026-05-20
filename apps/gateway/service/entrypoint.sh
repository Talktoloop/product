#!/bin/bash

export AWS_DEFAULT_REGION=$AWS_REGION

echo "Pulling SSM Paramaters from : ${AWS_SSM_PARAMETERS_PATH}"
if [ -n "${AWS_SSM_PARAMETERS_PATH}" ]; then
    echo Setting up environmnet variables from SSM Parameter Store: "${AWS_SSM_PARAMETERS_PATH}" ...
    PARAMETERS_JSON=$(aws ssm get-parameters-by-path --path $AWS_SSM_PARAMETERS_PATH --with-decryption | sed 's|'$AWS_SSM_PARAMETERS_PATH'||g')
    while read -r value param; do
        if [[ ${param:0:1} == "\"" ]]; then
            echo $value=$param >> /tmp/env_vars
        else
            echo $value="\"${param}\"" >> /tmp/env_vars
        fi
    done <<< $(echo $PARAMETERS_JSON | jq -r '.Parameters[] | (.Name + " " + .Value)')
    set -o allexport
    source /tmp/env_vars
    cat /tmp/env_vars
    set +o allexport
    rm -f /tmp/env_vars
fi

npm run typeorm:run && npm run start:prod
