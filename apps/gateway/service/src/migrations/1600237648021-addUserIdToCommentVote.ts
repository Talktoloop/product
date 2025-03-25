import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToCommentVote1600237648021 implements MigrationInterface {
  private tableName = 'comment_vote';
  private newColumn = new TableColumn({
    name: 'user_id',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });

  private indexUserName = 'IDX_COMMENT_VOTE_USER_ID';
  private fkUserName = 'fk_CommentVoteUser';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexUserName,
        columnNames: ['user_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.fkUserName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
