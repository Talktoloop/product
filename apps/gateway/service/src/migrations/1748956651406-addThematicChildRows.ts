import { MigrationInterface, QueryRunner } from 'typeorm';

export class addThematicChildRows1748956651406 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const healthId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'health'`))[0]?.id;
    const foodSecurityId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'foodSecurity'`))[0]?.id;
    const washId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'wash'`))[0]?.id;
    const shelterId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'shelter'`))[0]?.id;
    const educationId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'education'`))[0]?.id;
    const protectionId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'protection'`))[0]?.id;
    const governanceId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'governance'`))[0]?.id;
    const logisticsId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'logistics'`))[0]?.id;
    const energyEnvironmentId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'energy-environment'`))[0]?.id;
    const aidEffectivenessId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'aid-effectiveness'`))[0]?.id;
    const livelihoodsId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'livelihoods'`))[0]?.id;
    const essentialLivingSuppliesId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'essential-living-supplies'`))[0]?.id;

    await queryRunner.query(
      `INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES
      ('health-emergency-services', ${healthId}, 0, 'Health emergency services'),
      ('rehab-services', ${healthId}, 0, 'Rehabilitation services'),
      ('medical-waste', ${healthId}, 0, 'Medical waste'),
      ('food-vouchers', ${foodSecurityId}, 0, 'Food vouchers'),
      ('water-drainage', ${washId}, 0, 'Water drainage'),
      ('cholera', ${washId}, 0, 'Cholera'),
      ('temporary-accomodation', ${shelterId}, 0, 'Temporary accomodation for migrants/refugees'),
      ('informal-education', ${educationId}, 0, 'Informal education'),
      ('vocational-training', ${educationId}, 0, 'Vocational Training'),
      ('child-protection', ${protectionId}, 0, 'Child protection'),
      ('sexual-abuse', ${protectionId}, 0, 'Sexual exploitation, abuse and harassment'),
      ('discrimination', ${protectionId}, 0, 'Discrimination and exclusion'),
      ('general-protection', ${protectionId}, 0, 'General protection'),
      ('human-rights', ${protectionId}, 0, 'Human rights'),
      ('disruption-of-aid', ${protectionId}, 0, 'Disruption/suspension of Aid'),
      ('rule-of-law', ${governanceId}, 0, 'Rule of Law (justice system, police)'),
      ('emergency-telecom', ${logisticsId}, 0, 'Emergency telecommunications'),
      ('logistics-transportation', ${logisticsId}, 0, 'Transportation'),
      ('warehouses', ${logisticsId}, 0, 'Warehouses'),
      ('firewood', ${energyEnvironmentId}, 0, 'Firewood'),
      ('heating-cooling', ${energyEnvironmentId}, 0, 'Heating/cooling'),
      ('natural-disasters', ${energyEnvironmentId}, 0, 'Natural disasters'),
      ('pollution-hazards', ${energyEnvironmentId}, 0, 'Pollution and hazards'),
      ('cfm-process', ${aidEffectivenessId}, 0, 'CFM processes'),
      ('participation-representation', ${aidEffectivenessId}, 0, 'Participation and representation processes'),
      ('aid-relevance', ${aidEffectivenessId}, 0, 'Relevance of Aid'),
      ('aid-timeliness', ${aidEffectivenessId}, 0, 'Timeliness of Aid'),
      ('aid-quality', ${aidEffectivenessId}, 0, 'Quality of Aid'),
      ('aid-quantity', ${aidEffectivenessId}, 0, 'Quantity of Aid'),
      ('aid-distribution-safety', ${aidEffectivenessId}, 0, 'Safety of Aid distribution'),
      ('aid-distribution-fairness', ${aidEffectivenessId}, 0, 'Fairness of Aid distribution'),
      ('air-distribution-inclusiveness', ${aidEffectivenessId}, 0, 'Inclusiveness of aid distribution'),
      ('skills-acquisition', ${livelihoodsId}, 0, 'Skills acquisition'),
      ('commodity-prices', ${livelihoodsId}, 0, 'Prices of commodities'),
      ('inflation-devaluation', ${livelihoodsId}, 0, 'Inflation/devaluation'),
      ('clothing', ${essentialLivingSuppliesId}, 0, 'Clothing'),
      ('hygiene-items', ${essentialLivingSuppliesId}, 0, 'Hygiene items'),
      ('cooking-items', ${essentialLivingSuppliesId}, 0, 'Cooking items'),
      ('household-items', ${essentialLivingSuppliesId}, 0, 'Household items (Jerricans/fans/mosquito nets, etc.)'),
      ('lights', ${essentialLivingSuppliesId}, 0, 'Lights')
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM thematic WHERE code IN (
      'health-emergency-services',
      'rehab-services',
      'medical-waste',
      'food-vouchers',
      'water-drainage',
      'cholera',
      'temporary-accomodation',
      'informal-education',
      'vocational-training',
      'child-protection',
      'sexual-abuse',
      'discrimination',
      'general-protection',
      'human-rights',
      'disruption-of-aid',
      'rule-of-law',
      'emergency-telecom',
      'logistics-transportation',
      'warehouses',
      'firewood',
      'heating-cooling',
      'natural-disasters',
      'pollution-hazards',
      'cfm-process',
      'participation-representation',
      'aid-relevance',
      'aid-timeliness',
      'aid-quality',
      'aid-quantity',
      'aid-distribution-safety',
      'aid-distribution-fairness',
      'air-distribution-inclusiveness',
      'skills-acquisition',
      'commodity-prices',
      'inflation-devaluation',
      'clothing',
      'hygiene-items',
      'cooking-items',
      'household-items',
      'lights'
    )`);
  }
}
