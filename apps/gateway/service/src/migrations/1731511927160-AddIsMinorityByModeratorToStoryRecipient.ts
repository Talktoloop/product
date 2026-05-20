import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsMinorityByModeratorToStoryRecipient1731511927160 implements MigrationInterface {
  private tableName = 'story_recipient';
  private newColumn = new TableColumn({
    name: 'is_minority_by_moderator',
    type: 'boolean',
    isNullable: true,
    default: null,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
