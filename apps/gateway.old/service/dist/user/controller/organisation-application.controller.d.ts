import { UserEntity } from '../entity/user.entity';
import { OrganisationApplicationService } from '../service/organisation-application.service';
import { SuccessRO } from '../../common/response/success.ro';
import { AddOrganisationApplicationDto } from '../request/dto/add-organisation-application.dto';
import { UserService } from '../service/user.service';
export declare class OrganisationApplicationController {
    private readonly userService;
    private readonly organisationApplicationService;
    constructor(userService: UserService, organisationApplicationService: OrganisationApplicationService);
    addOrganisationApplication(user: UserEntity, data: AddOrganisationApplicationDto): Promise<SuccessRO>;
}
