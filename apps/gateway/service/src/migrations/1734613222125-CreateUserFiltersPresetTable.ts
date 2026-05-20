import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserFiltersPresetTable1734613222125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_filters_preset",
        columns: [
          {
            name: "id",
            type: "char",
            length: "36",
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: "user_id",
            type: "char",
            length: "36",
            isNullable: false,
          },
          {
            name: "filters_preset_id",
            type: "char",
            length: "36",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );

    await queryRunner.createForeignKeys("user_filters_preset", [
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedTableName: "user",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
      new TableForeignKey({
        columnNames: ["filters_preset_id"],
        referencedTableName: "filters_preset",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_filters_preset");
  }
}
