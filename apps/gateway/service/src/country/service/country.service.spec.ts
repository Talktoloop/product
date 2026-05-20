import { Test, TestingModule } from '@nestjs/testing';
import { CountryRepository } from '../repository/country.repository';
import { CountryService } from './country.service';
import { countryRepositoryMock } from '../../../test/mocks/country.repository.mock';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';

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

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountryService,
        {
          provide: CountryRepository,
          useValue: countryRepositoryMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
      ],
    }).compile();

    service = module.get<CountryService>(CountryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
