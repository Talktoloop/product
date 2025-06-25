import { Injectable, Logger, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import {
  CognitoIdentityProvider,
  AdminGetUserCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider';
import { CognitoResponse } from './interface/cognito.interface';
import { DI_CONSTANTS } from '../common/constant/di.constant';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwkToPem = require('jwk-to-pem');

@Injectable()
export class AuthService {
  private pem;

  private readonly logger = new Logger(AuthService.name);
  constructor(
    @Inject(CognitoIdentityProvider)
    private readonly cognito: CognitoIdentityProvider,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) {}

  public async getPem(): Promise<any> {
    return axios
      .get(this.config.get('authorization.jwks'))
      .then((res: any) => {
        const jwks = res.data.keys[1];
        if (res?.data?.keys.length < 1) {
          throw new Error('Missing JWKS keys');
        }
        this.pem = jwkToPem(jwks);
      })
      .catch((error) => {
        this.logger.error(error.response);
        this.logger.error('AWS credentials are wrong');
      });
  }

  public async authenticate(token: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (!this.pem) {
        await this.getPem();
      }

      jwt.verify(token, this.pem, (error, decodedToken) => {
        if (error) {
          reject(error);
        }
        resolve(decodedToken);
      });
    });
  }

  public getAccountDetails(email: string): Promise<AdminGetUserCommandOutput> {
    return new Promise((resolve, reject) => {
      this.cognito.adminGetUser(
        {
          UserPoolId: this.config.get('authorization.userPoolId'),
          Username: email,
        },
        (error, result) => {
          if (!error) {
            resolve(result);
          }

          reject(error);
        },
      );
    });
  }

  getUserAttributes(tokenSub: string): Promise<CognitoResponse> {
    return new Promise((resolve) => {
      this.cognito.listUsers(
        {
          UserPoolId: this.config.get('authorization.userPoolId'),
          Filter: `sub = "${tokenSub}"`,
        },
        (error, data) => {
          if (error || data.Users.length !== 1) {
            this.logger.error(
              error?.message || null,
              error?.stack,
              'CognitoStrategy',
            );
            resolve(null);
            return;
          }
          const attributes = {};
          data.Users[0].Attributes.forEach(
            (attribute) => (attributes[attribute.Name] = attribute.Value),
          );
          resolve(attributes as CognitoResponse);
        },
      );
    });
  }
}
