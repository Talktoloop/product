import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateStoryOrganisationTag1743579031189 implements MigrationInterface {
    tableName = 'story_organisation_tag'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'story_id',
                        type: 'varchar',
                        length: '36',
                        isNullable: false,
                    },
                    {
                        name: 'organisation_id',
                        type: 'varchar',
                        length: '36',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
                columnNames: ['story_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'story',
                name: 'fkOrganisationTagToStory',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
                columnNames: ['organisation_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'organisation',
                name: 'fkOrganisationTagToOrganisation',
                onDelete: 'CASCADE',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('story_organisation_tag');
    }

}
