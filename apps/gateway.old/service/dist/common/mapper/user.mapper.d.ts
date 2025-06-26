import { UserEntity } from '../../user/entity/user.entity';
import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
export declare const formatUser: (user: UserEntity | {
    organisation: {
        name: string;
    };
}) => UserCommentDetailsRO & {
    organisation: string;
};
