import { Test, TestingModule } from '@nestjs/testing';
import { caseRepositoryMock } from '../../../test/mocks/case.repository';
import { caseServiceMock } from '../../../test/mocks/case.service';
import { CaseRepository } from '../repository/case.repository';
import { CaseService } from './case.service';
import { CaseInvestigationRepository } from '../repository/case-investigation.repository';
import { caseInvestigationRepositoryMock } from '../../../test/mocks/case-investigation.repository';

jest.mock('../../config/default', () => ({
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

describe('CaseService', () => {
  let service: CaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CaseService,
          useValue: caseServiceMock,
        },
        {
          provide: CaseRepository,
          useValue: caseRepositoryMock,
        },
        {
          provide: CaseRepository,
          useValue: caseRepositoryMock,
        },
        {
          provide: CaseInvestigationRepository,
          useValue: caseInvestigationRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<CaseService>(CaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
