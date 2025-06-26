import { StatusRO } from '../common/response/status';
import { UserIsConfirmedDTO } from '../user/request/dto/user-is-confirmed.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getEmailConfirmation(params: UserIsConfirmedDTO): Promise<StatusRO>;
}
