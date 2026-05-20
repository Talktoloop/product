import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnAdditionalContactDetails1742243557584
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE story_recipient
        ADD COLUMN additional_contact_details MEDIUMTEXT NULL;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE story_recipient
            DROP COLUMN additional_contact_details;`);
  }
}
