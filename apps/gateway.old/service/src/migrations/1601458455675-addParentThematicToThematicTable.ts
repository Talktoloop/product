import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class AddParentThematicToThematicTable1601458455675
  implements MigrationInterface {
  private tableName = 'thematic';

  private newColumn = new TableColumn({
    name: 'parent_thematic_id',
    type: 'int',
    isNullable: true,
  });

  private indexThematicName = 'IDX_THEMATIC_PARENT_THEMATIC_ID';
  private fkThematicName = 'fk_ThematicParentThematicId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexThematicName,
        columnNames: ['parent_thematic_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['parent_thematic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'thematic',
        name: this.fkThematicName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.indexThematicName);
    await queryRunner.dropForeignKey(this.tableName, this.fkThematicName);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
