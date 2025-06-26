import { UserEntity } from '../../user/entity/user.entity';
export declare class UserExportCsvActivityEntity {
    id: number;
    userId: string;
    timestamp: Date;
    user?: UserEntity;
}
