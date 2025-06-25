
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFiltersPresetTable1734613020140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "filters_preset",
        columns: [
          {
            name: "id",
            type: "char",
            length: "36",
            isPrimary: true,
            isGenerated: false
          },
          {
            name: "preset_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "filters",
            type: "json",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("filters_preset");
  }
}

