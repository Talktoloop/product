import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class setCommentNickname1648065575942 implements MigrationInterface {
    name: string;
    commentTable: string;
    userTable: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
