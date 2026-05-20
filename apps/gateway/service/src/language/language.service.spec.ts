import { Test, TestingModule } from '@nestjs/testing';
import { LanguageService } from './language.service';
import { languageServiceMock } from '../../test/mocks/language.service.mock';

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

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
      ],
    }).compile();
    service = module.get<LanguageService>(LanguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
