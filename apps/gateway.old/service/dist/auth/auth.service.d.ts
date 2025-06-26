import { ConfigService } from '@nestjs/config';
import { CognitoIdentityProvider, AdminGetUserCommandOutput } from '@aws-sdk/client-cognito-identity-provider';
import { CognitoResponse } from './interface/cognito.interface';
export declare class AuthService {
    private readonly cognito;
    private readonly config;
    private pem;
    private readonly logger;
    constructor(cognito: CognitoIdentityProvider, config: ConfigService);
    getPem(): Promise<any>;
    authenticate(token: string): Promise<any>;
    getAccountDetails(email: string): Promise<AdminGetUserCommandOutput>;
    getUserAttributes(tokenSub: string): Promise<CognitoResponse>;
}
