import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableForCasesSynchronisation1626121964176
  implements MigrationInterface {
  private tableName = 'case_sync';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'case_uuid',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'story_created',
            type: 'datetime',
            length: '6',
            isNullable: false,
          },
          {
            name: 'urgency',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'case_status',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },
          {
            name: 'case_created',
            type: 'datetime',
            length: '6',
            isNullable: false,
          },
          {
            name: 'author_perspective',
            type: 'varchar',
            length: '400',
            isNullable: true,
          },
          {
            name: 'allegation_type',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'allegation_organization',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'incident_date',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'incident_country',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'incident_province',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'survivor_gender',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'survivor_age',
            type: 'varchar',
            length: '5',
            isNullable: true,
          },
          {
            name: 'survivor_disability',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'author_need_assistance',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'assistance_status',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'case_processed',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'referral_response',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'assessment_made',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'investigation_status',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'informing_author',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'case_closed',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'case_unaccounted_closed_status',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'assistance_referral_made',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'assistance_who_made_referral',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'organisation_allegation',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'allegation_referral',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'response_to_allegation_referral',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'investigation_opened',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'which_organisation_doing_investigation',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'investigation_closed',
            type: 'datetime',
            length: '6',
            isNullable: true,
          },
          {
            name: 'investigation_outcome',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'organisation_type',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
