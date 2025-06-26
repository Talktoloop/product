import { UserEntity } from './user.entity';
export declare class OrganisationApplicationEntity {
    id: number;
    userId: string;
    user: UserEntity;
    organisationId: string;
    organisation?: UserEntity;
    createdAt: Date;
}
