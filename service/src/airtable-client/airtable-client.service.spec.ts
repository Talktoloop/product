import { Test, TestingModule } from '@nestjs/testing';
import { AirTableClientRepository } from './repository/airtable-client.repository';
import { CaseAuthorPerspectiveRepository } from './repository/case-author-perspective.repository';
import { CaseThematicAreaRepository } from './repository/case-thematic-area.repository';
import { CaseThematicAreaSubsectionRepository } from './repository/case-thematic-area-subsection.repository';
import { CaseSurvivorDisabilityAreaRepository } from './repository/case-survivor-disability.repository';
import { CaseSyncInvestigationRepository } from './repository/case-investigation.repository';
import { AirTableClientService } from './airtable-client.service';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { airTableMock } from '../../test/mocks/airtable.mock';
import { CaseSyncAllegationReferralRepository } from './repository/case-allegation-referral.repository';
import { CaseSyncAllegationReferralOrganisationRepository } from './repository/case-allegation-referral-organisation.repository';

jest.mock('../config/default', () => ({
  dynamicConfiguration: () => {
    return {
      database: {
        charset: '',
        database: '',
        host: '',
        password: 'root',
        port: 3307,
        type: 'mysql',
        username: '',
      },
    };
  },
}));

describe('AirtableClientService', () => {
  let service: AirTableClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AirTableClientService,
        {
          provide: AirTableClientRepository,
          useValue: {},
        },
        {
          provide: CaseAuthorPerspectiveRepository,
          useValue: {},
        },
        {
          provide: CaseThematicAreaRepository,
          useValue: {},
        },
        {
          provide: CaseThematicAreaSubsectionRepository,
          useValue: {},
        },
        {
          provide: CaseSurvivorDisabilityAreaRepository,
          useValue: {},
        },
        {
          provide: CaseSyncInvestigationRepository,
          useValue: {},
        },
        {
          provide: CaseSyncAllegationReferralRepository,
          useValue: {},
        },
        {
          provide: CaseSyncAllegationReferralOrganisationRepository,
          useValue: {},
        },
        {
          provide: DI_CONSTANTS.AIRTABLE,
          useValue: airTableMock,
        },
      ],
    }).compile();

    service = module.get<AirTableClientService>(AirTableClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
