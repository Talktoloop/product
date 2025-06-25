import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnLabelToThematic1748595603899 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('thematic', new TableColumn({
      name: 'label',
      type: 'varchar',
      length: '255',
      isNullable: true,
      default: null,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('thematic', 'label');
  }
}
