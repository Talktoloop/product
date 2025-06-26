import { UserService } from '../user/service/user.service';
import { Strategy } from './strategy';
import { AuthService } from './auth.service';
import { AirTableUserService } from '../airtable-client/service/airtable-user.service';
declare const CognitoStrategy_base: new (...args: any[]) => Strategy;
export declare class CognitoStrategy extends CognitoStrategy_base {
    private readonly userService;
    private readonly authService;
    private readonly airTableUserService;
    constructor(userService: UserService, authService: AuthService, airTableUserService: AirTableUserService);
    static getToken(request: {
        headers: {
            authorization: string;
        };
    }): string;
}
export {};
