import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addInvitationDateAndInvitedByColumnsToUser1692966806470
  implements MigrationInterface
{
  tableName = 'user';
  foreignKeyInvitedBy = 'fkInvitedByUser';
  columns = [
    new TableColumn({
      name: 'invitation_date',
      type: 'datetime',
      isNullable: true,
    }),
    new TableColumn({
      name: 'invited_by',
      type: 'varchar',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.columns);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['invited_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKeyInvitedBy,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyInvitedBy);
    await queryRunner.dropColumns(this.tableName, this.columns);
  }
}
