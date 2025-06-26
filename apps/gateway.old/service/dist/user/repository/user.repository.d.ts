import { DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { AirTableUserInterface } from '../../airtable-client/interface/airtable-user.interface';
export declare class UserRepository extends Repository<UserEntity> {
    private readonly logger;
    findUsersWithNotificationOn(organisations: Partial<OrganisationEntity>[]): Promise<UserEntity[]>;
    findUsersWithRemindersOn(organisations: Partial<OrganisationEntity>[]): Promise<UserEntity[]>;
    findById(id: string, relations?: string[]): Promise<UserEntity>;
    saveUser(data: DeepPartial<UserEntity>): Promise<UserEntity>;
    findUsersToAirtable(userId?: string): Promise<AirTableUserInterface[]>;
}
