import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDifficultyToStoryTable1622662942357
  implements MigrationInterface {
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'difficulty',
    type: 'tinyint',
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
