import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDisabilitiesOtherExplanationToStoryRecipient1763382093503
  implements MigrationInterface
{
  private tableName = 'story_recipient';
  private newColumn = new TableColumn({
    name: 'disabilities_other_explanation',
    type: 'text',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}

