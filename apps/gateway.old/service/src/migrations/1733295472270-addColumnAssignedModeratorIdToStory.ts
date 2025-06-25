import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class AddColumnAssignedModeratorIdToStory1733295472270
  implements MigrationInterface
{
  private tableName = 'story';
  private columnName = 'assigned_moderator_id';
  private newColumn = new TableColumn({
    name: this.columnName,
    type: 'varchar',
    isNullable: true,
  });

  private indexAssignedModerator = 'IDX_STORY_ASSIGNED_MODERATORS_ID';
  private fkAssignedModerator = 'fk_StoryToAssignedModeratorUser';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: this.fkAssignedModerator,
        columnNames: [this.columnName],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexAssignedModerator,
        columnNames: [this.columnName],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.fkAssignedModerator);

    await queryRunner.dropIndex(this.tableName, this.indexAssignedModerator);

    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
