import { OrganisationApplicationRepository } from '../repository/organisation-application.repository';
import { OrganisationApplicationEntity } from '../entity/organisation-application.entity';
import { DeleteResult } from 'typeorm';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { UserService } from '../../user/service/user.service';
export declare class OrganisationApplicationService {
    private readonly organisationApplicationRepository;
    private readonly airTableUserService;
    private readonly userService;
    private readonly logger;
    constructor(organisationApplicationRepository: OrganisationApplicationRepository, airTableUserService: AirTableUserService, userService: UserService);
    removeApplicationById(id: number): Promise<DeleteResult>;
    removeApplicationByUserId(userId: string): Promise<DeleteResult>;
    saveApplication(userId: string, organisationId: string): Promise<OrganisationApplicationEntity>;
}
