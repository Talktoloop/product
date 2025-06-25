import { MigrationInterface, QueryRunner } from "typeorm"

export class ThematicAreaTags1729502313950 implements MigrationInterface {

    private tableName = 'thematic';
    private readonly crossCutting = 'cross-cutting'; // Ensure this matches the category name
    private readonly newThematic = 'general-assistance';


    public async up(queryRunner: QueryRunner): Promise<void> {
        const crossCuttingCategory = await queryRunner.query(
            `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
            [this.crossCutting]
        );

        if (crossCuttingCategory.length > 0) {
            const crossCuttingId = crossCuttingCategory[0].id;
            const crossCuttingChildren = await queryRunner.query(
                `SELECT id FROM ${this.tableName} WHERE parent_thematic_id = ?`,
                [crossCuttingId]
            );

            for (let i = 0; i < crossCuttingChildren.length; i++) {
                const childId = crossCuttingChildren[i].id;
                await queryRunner.query(
                    `UPDATE ${this.tableName} SET \`order\` = ? WHERE id = ?`,
                    [i + 1, childId]
                );
            }

            await queryRunner.query(
                `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
                [this.newThematic, crossCuttingChildren.length + 1, crossCuttingId,]
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const crossCuttingCategory = await queryRunner.query(
            `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
            [this.crossCutting]
        );
    
        if (crossCuttingCategory.length > 0) {
            const crossCuttingId = crossCuttingCategory[0].id;
    
            // Delete the inserted thematic category (general-assistance)
            await queryRunner.query(
                `DELETE FROM ${this.tableName} WHERE code = ? AND parent_thematic_id = ?`,
                [this.newThematic, crossCuttingId]
            );
        }
    }    
}
