import {
  Injectable,
  ForbiddenException,
  Logger,
  forwardRef,
  Inject,
} from '@nestjs/common';
import axios from 'axios';
import { staticConfig } from '../../config/default';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { CountryAdministrativeDataRepository } from '../repository/country-administrative-data.repository';
import { StoryEntity } from '../../story/entity/story.entity';
import { StoryService } from '../../story/service/story.service';
import { removeObjectDuplicatesByKey } from '../../common/helpers';
import { UnparsedLocation } from '../type/unparsed-location.type';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { AdministrativeDataWithParents } from '../type/administrative-data-with-parents.type';
import { CountryAdministrativeDataNameRepository } from '../repository/country-administrative-data-name.repository';
import { CountryEntity } from '../../country/entity/country.entity';
import { LibraryResponse } from 'node-mailjet';
import { v4 as uuidv4 } from 'uuid';
import { NotificationService } from '../../notification/service/notification.service';
import * as fs from 'fs';
import * as path from 'path';
import { EMAIL_TEMPLATES, STORY_STATUS } from '@ourloop/shared';
import { format } from 'date-fns';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { CountryService } from './country.service';

@Injectable()
export class AdministrativeDataService {
  private readonly logger = new Logger(AdministrativeDataService.name);

  constructor(
    private readonly administrativeDataRepository: CountryAdministrativeDataRepository,
    private readonly administrativeDataNameRepository: CountryAdministrativeDataNameRepository,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    private readonly notificationService: NotificationService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly countryService: CountryService,
  ) {}

  async findByCountryCodeAndPhrase(
    countryCode: string,
    phrase: string,
    languageId?: number,
  ): Promise<Array<{ administrativeAreaId: number }>> {
    const country = await this.countryService.findByCode(countryCode);

    if (!country) {
      return [];
    }

    return this.administrativeDataNameRepository.findByCountryIdAndPhrase(
      country.id,
      phrase,
      languageId,
    );
  }

  async findAdministrativeDataOrFail(
    id: number,
    relations: string[] = [],
  ): Promise<CountryAdministrativeDataEntity> {
    return this.administrativeDataRepository.findAdministrativeDataByIdOrFail(
      id,
      relations,
    );
  }

  async fetchOneLevel(
    name: string,
    level: number,
    exceptionIds: number[] = [],
    defaultLanguageCode: string,
    languageCodes: string[],
  ): Promise<[any]> {
    const overpassQuery = `
    [out:json][timeout:10];
    ${
      level === 4
        ? `area["ISO3166-1"="${name.toUpperCase()}"]->.searchArea;`
        : `area[name="${name}"]->.searchArea;`
    } 
    (
      relation["admin_level"="${level}"]["boundary"="administrative"](area.searchArea);
    );
    out body;
    >;
    
    out skel qt;
    `;

    try {
      const response = await axios.get(staticConfig.administrativeData.apiUrl, {
        params: {
          data: overpassQuery,
          timeout: staticConfig.administrativeData.timeout,
        },
      });

      return response.data.elements
        ?.filter(
          (element) =>
            element.tags &&
            element.tags.admin_level === `${level}` &&
            element.tags.boundary === 'administrative' &&
            element.tags.name &&
            !exceptionIds.includes(element.id),
        )
        ?.map((element) => {
          const names = languageCodes
            .map((code) => ({
              code,
              name: element.tags[`name:${code}`],
            }))
            .filter((item) => item.name);

          const nativeCode =
            element.tags['wikipedia']?.split(':')[0] ?? defaultLanguageCode;

          if (!names.find((item) => item.code === nativeCode)) {
            names.push({
              code: nativeCode,
              name: element.tags.name,
            });
          }

          return {
            id: element.id,
            names,
            level: parseInt(element.tags.admin_level),
            children: [],
          };
        });
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('API calls limit reached, try again later');
    }
  }

  async checkIfAdministrativeDataExists(countryId: number): Promise<boolean> {
    return this.administrativeDataRepository
      .find({ where: { countryId } })
      .then((data) => data.length > 0);
  }

  async saveAdministrativeData(
    languages: Record<string, number>,
    data: Record<string, any>[],
    country: CountryEntity,
    defaultLanguageCode: string,
    level = 1,
    parentId = null,
  ): Promise<void> {
    let entity: CountryAdministrativeDataEntity;
    let names = [];
    let defaultName: string;

    for (const item of data) {
      names = item.names;

      if (!names.find((value) => value.code === defaultLanguageCode)) {
        defaultName = names.find(
          (value) => value.code === country.language?.code,
        )?.name;

        if (defaultName) {
          names.push({
            code: defaultLanguageCode,
            name: defaultName,
          });
        }
      }

      entity = await this.administrativeDataRepository.save({
        names: item.names
          .filter((value) => languages[value.code])
          .map((value) => ({
            name: value.name,
            languageId: languages[value.code],
          })),
        countryId: country.id,
        hasChild: item.children.length > 0,
        parentId,
        level,
        externalId: item.id,
      });

      await this.saveAdministrativeData(
        languages,
        item.children,
        country,
        defaultLanguageCode,
        level + 1,
        entity.id,
      );
    }
  }

  async fetchAdministrativeData(
    phrase: string,
    level: number,
    limit: number,
    defaultLanguageCode: string,
    exceptionIds: number[],
    languageCodes: string[],
    arr = [],
  ): Promise<Record<string, any>[]> {
    if (!(phrase && level) || level > limit) {
      return arr;
    }

    let data = await this.fetchOneLevel(
      phrase,
      level,
      exceptionIds,
      defaultLanguageCode,
      languageCodes,
    );
    let dataForNextLevel;

    // checks if the limit has not been exceeded
    if (level + 1 <= limit) {
      dataForNextLevel = await this.fetchOneLevel(
        phrase,
        level + 1,
        exceptionIds,
        defaultLanguageCode,
        languageCodes,
      );
    }

    // removes redundant nesting
    if (data && data.length == 1 && data[0].names.includes(phrase)) {
      data = dataForNextLevel;
    } else if (dataForNextLevel) {
      for (const item of dataForNextLevel) {
        if (!data.find((element) => element.names[0] === item.names[0])) {
          data.push(item);
        }
      }
    }

    // check deeper levels if no data found on the next 2
    for (let i = 2; i < limit; i++) {
      if ((!data || !data[0]) && level + i <= limit) {
        data = await this.fetchOneLevel(
          phrase,
          level + i,
          exceptionIds,
          defaultLanguageCode,
          languageCodes,
        );
      }

      if (data && data.length > 0) {
        break;
      }
    }

    let names = [];

    for (const key in data) {
      names = data[key].names.reverse();

      data[key].children = await this.fetchAdministrativeData(
        names[0].name,
        data[key].level + 1,
        limit,
        defaultLanguageCode,
        exceptionIds,
        languageCodes,
        data[key].children,
      );
    }

    return data;
  }

  removeDuplicates(data: Record<string, any>[]): Record<string, any>[] {
    for (const key in data) {
      // removes duplicate object
      data[key].children = data[key].children?.reduce(
        (unique: Record<string, unknown>[], item: Record<string, unknown>) => {
          if (
            !unique.some(
              (obj: Record<string, unknown>) =>
                obj.names[0].name === item.names[0].name,
            )
          ) {
            unique.push(item);
          }
          return unique;
        },
        [],
      );

      // removes redundant nesting
      if (
        data[key]?.children &&
        data[key].children.length === 1 &&
        data[key]?.names[0].name === data[key].children[0].names[0].name
      ) {
        data[key].children = [];
      }
    }

    const names = [];

    for (const item of data) {
      if (item.children) {
        for (const child of item.children) {
          for (const value of child.names) {
            names.push(value.name);
          }
        }
      }
    }

    // removes duplicates
    data = data?.filter(
      (item) =>
        !names.includes(item.names[0].name) ||
        item.children?.find(
          (child) => child.names[0].name === item.names[0].name,
        ),
    );

    for (const key in data) {
      // remove the child branch if have same name
      data[key].children = data[key].children?.filter(
        (child) => child.names[0].name !== data[key].names[0].name,
      );

      data[key].children = this.removeDuplicates(data[key]?.children ?? []);
    }

    return data;
  }

  async checkIfHasChild(
    data: AdministrativeDataWithDetails[],
    onlyWithStory: boolean,
  ): Promise<AdministrativeDataWithDetails[]> {
    if (!onlyWithStory) {
      return data;
    }

    const parentHasChild: Record<number, number> = {};

    for (const index in data) {
      if (data[index].hasChild && !parentHasChild[data[index].id]) {
        const numberOfStories =
          await this.administrativeDataRepository.getNumberOfStoriesByAdministrationDataParentId(
            data[index].id,
          );

        parentHasChild[data[index].id] = numberOfStories;
      }

      data[index].hasChild = parentHasChild[data[index].id] > 0 ? true : false;
    }

    return data;
  }

  async findAdministrativeDataWithCounters(
    countryId: number,
    parentId: number,
    onlyWithStory: boolean,
  ): Promise<Array<AdministrativeDataWithDetails>> {
    const data = await this.administrativeDataRepository
      .getAdministrativeDataWithNumberOfStories(countryId, parentId)
      .then((result) =>
        result.filter((item) => !onlyWithStory || item.numberOfStories > 0),
      );

    return this.checkIfHasChild(data, onlyWithStory);
  }

  async findPlaces(phrase: string, className = 'boundary'): Promise<any> {
    try {
      return axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${phrase}&format=json`,
          {
            params: {
              timeout: staticConfig.administrativeData.timeout,
            },
          },
        )
        .then((result) => {
          const data = result?.data?.filter(
            (item: Record<string, unknown>) => item.class === className,
          );

          return removeObjectDuplicatesByKey(data, 'display_name');
        });
    } catch (error) {
      throw new ForbiddenException('API calls limit reached, try again later');
    }
  }

  async findPlaceDetails(id: number): Promise<any> {
    try {
      return axios
        .get(
          `https://nominatim.openstreetmap.org/details?osmtype=R&osmid=${id}&format=json`,
          {
            params: {
              timeout: staticConfig.administrativeData.timeout,
            },
          },
        )
        .then((result) => result.data);
    } catch (error) {
      throw new ForbiddenException('API calls limit reached, try again later');
    }
  }

  async parseStoryPlaces(stories: StoryEntity[]): Promise<{
    numberOfParsedPlaces: number;
    unparsedLocations: UnparsedLocation[];
  }> {
    let locationName: string;
    let numberOfParsedPlaces = 0;
    let storyIdsWithoutRegionFound = false;
    const unparsedLocations = [];
    const storyNotParsedIds = [];

    for (const story of stories) {
      storyIdsWithoutRegionFound = false;
      locationName = await this.prepareLocationName(story);

      let placeArr = locationName.split(', ').reverse();

      // remove information such as zip code
      placeArr = placeArr.filter((value) => !/\d/.test(value));

      if (placeArr.length > 1) {
        placeArr.shift();
      }

      const items = [];
      let administrativeArea: CountryAdministrativeDataEntity;
      let children = [];
      let filteredChildren = [];
      let searchedName: string;

      for (const name of placeArr) {
        if (children.length > 0) {
          filteredChildren = children.filter((item) => item.name === name);

          if (filteredChildren.length !== 1) {
            break;
          }

          searchedName = filteredChildren[0].name;
        } else {
          searchedName = name;
        }

        const administrativeDataIds =
          await this.administrativeDataNameRepository
            .findByCountryIdAndPhrase(
              story.countryId,
              searchedName?.replace(/'/g, "\\'"),
              null,
              true,
            )
            .then((result) =>
              result.map((value) => value.administrativeAreaId),
            );

        if (administrativeDataIds.length === 0) {
          storyNotParsedIds.push(story.id);
          storyIdsWithoutRegionFound = true;
        }

        administrativeArea = await this.administrativeDataRepository
          .findByIdsWithRelations(administrativeDataIds, ['children'])
          .then((result) => (result.length === 1 ? result[0] : null));

        if (!administrativeArea) {
          break;
        }

        children = administrativeArea.children ?? [];

        items.push(administrativeArea);
      }

      if (items.length > 0) {
        numberOfParsedPlaces++;

        await Promise.all(
          items.map((item) =>
            this.storyService.saveAdministrativeArea({
              storyId: story.id,
              administrativeAreaId: item.id,
            }),
          ),
        );
      } else if (!storyIdsWithoutRegionFound) {
        unparsedLocations.push({
          storyId: story.id,
          location: story.place,
          url: this.getStoryUrl(story),
        });
      }
    }

    return this.parseFilteredStoryPlaces(
      stories,
      storyNotParsedIds,
      numberOfParsedPlaces,
      unparsedLocations,
    );
  }

  getStoryUrl(story: StoryEntity): string {
    return `${this.config.get('frontend.url')}${
      story.status === STORY_STATUS.PUBLISHED
        ? `/story/details/${story.id}`
        : `/inbox/stories/story/${story.channel}/${story.id}/review`
    }`;
  }

  async prepareLocationName(story: StoryEntity): Promise<string> {
    let locationName = story.place;

    const places = await this.findPlaces(story.place).then((result) =>
      result.filter((item) => item.display_name.split(', ').length < 6),
    );
    const details = await Promise.all(
      places.map((place) => this.findPlaceDetails(place.osm_id)),
    ).then((result) =>
      result.filter((item) => item.country_code === story.country?.code),
    );

    // only be considered if data is clearly identified
    if (details.length === 1) {
      const place = places.filter(
        (place) => place.place_id === details[0].place_id,
      )[0];

      if (place) {
        locationName = place.display_name;
      }
    }

    return locationName;
  }

  async parseFilteredStoryPlaces(
    stories: StoryEntity[],
    storyNotParsedIds: string[],
    numberOfParsedPlaces: number,
    unparsedLocations: UnparsedLocation[],
  ): Promise<{
    numberOfParsedPlaces: number;
    unparsedLocations: UnparsedLocation[];
  }> {
    for (const story of stories.filter((story) =>
      storyNotParsedIds.includes(story.id),
    )) {
      const administrativeDataIds = await this.administrativeDataNameRepository
        .findByCountryIdAndPhrase(
          story.countryId,
          story.place.split(', ')[0]?.replace(/'/g, "\\'"),
          null,
          true,
        )
        .then((result) => result.map((value) => value.administrativeAreaId));

      if (administrativeDataIds.length === 1) {
        numberOfParsedPlaces++;

        const parents = await this.findParentsById(administrativeDataIds.pop());

        await Promise.all(
          parents.map((parent) =>
            this.storyService.saveAdministrativeArea({
              storyId: story.id,
              administrativeAreaId: parent.id,
            }),
          ),
        );
      } else {
        unparsedLocations.push({
          storyId: story.id,
          location: story.place,
          url: this.getStoryUrl(story),
        });
      }
    }

    return { unparsedLocations, numberOfParsedPlaces };
  }

  async findParentsById(
    id: number,
    parents: CountryAdministrativeDataEntity[] = [],
  ): Promise<CountryAdministrativeDataEntity[]> {
    const item = await this.administrativeDataRepository.findById(id, [
      'names',
    ]);

    if (item) {
      parents.push(item);
    }

    if (!item?.parentId) {
      return parents;
    }

    return this.findParentsById(item?.parentId, parents);
  }

  async findParents(
    items: AdministrativeDataWithDetails[],
    parents: Array<{
      list: CountryAdministrativeDataEntity[];
      childId: number;
      key?: number;
    }> = [],
  ): Promise<
    Array<{
      list: CountryAdministrativeDataEntity[];
      childId: number;
      key?: number;
    }>
  > {
    if (!items[0]) {
      return parents;
    }

    if (Object.keys(parents).length === 0) {
      for (const item of items) {
        parents.push({ list: [], key: item.parentId, childId: item.id });
      }
    }

    items = await this.administrativeDataRepository.findByIds(
      items.map((item) => item.parentId),
      ['names'],
    );

    for (const item of items) {
      for (const index in parents) {
        if (parents[index].key == item.id) {
          parents[index].list.push(item);
          parents[index].key = item.parentId;
        }
      }
    }

    if (!items[0]) {
      return parents;
    }

    return this.findParents(items, parents);
  }

  async findByCountryAndPhraseWithParents(
    params: FindRegionsDTO,
    userLanguageId: number,
    defaultLanguageId: number,
  ): Promise<AdministrativeDataWithParents> {
    userLanguageId = userLanguageId ?? defaultLanguageId;

    const languageIds =
      await this.administrativeDataNameRepository.findLanguagesByCountryId(
        params.countryId,
      );

    if (!languageIds.find((item) => item.languageId === userLanguageId)) {
      userLanguageId = defaultLanguageId;
    }

    const names =
      await this.administrativeDataNameRepository.findByCountryIdAndPhrase(
        params.countryId,
        params.phrase,
        userLanguageId,
      );

    if (!names[0]) {
      return { items: [], parents: {} };
    }

    let items = await this.administrativeDataRepository.findByCountryIdAndIds(
      names.map((item) => item.administrativeAreaId),
      params.countryId,
      params.onlyWithStory,
    );

    items = await this.checkIfHasChild(items, params.onlyWithStory);

    const parents = await this.findParents(items);
    const parsedParents = {};

    for (const parent of parents) {
      parsedParents[parent.childId] = parent.list;
    }

    return { items, parents: parsedParents };
  }

  async assignAdministrativeDataToStory(
    regionId: number,
    storyId: string,
  ): Promise<void> {
    await this.findAdministrativeDataOrFail(regionId);

    const administrativeData = await this.findParentsById(regionId);

    if (administrativeData.length > 0) {
      for (const item of administrativeData) {
        await this.storyService.saveAdministrativeArea({
          storyId: storyId,
          administrativeAreaId: item.id,
        });
      }
    }
  }

  async exportUnparsedLocationsToCSV(
    countryName: string,
    unparsedLocations: UnparsedLocation[],
  ): Promise<string> {
    const filePath = `storage/${uuidv4()}.csv`;

    let dataAsString = 'Story ID\tLocation\tCountry Name\tURL\n';

    unparsedLocations.forEach((item) => {
      dataAsString += `${[
        item.storyId,
        item.location?.replace(/,/g, ' | '),
        countryName,
        item.url,
      ].join('\t')}\n`;
    });

    let base64content: string;

    try {
      fs.appendFileSync(filePath, dataAsString);

      base64content = fs.readFileSync(path.resolve(filePath), {
        encoding: 'base64',
      });

      fs.unlinkSync(path.resolve(filePath));

      return base64content;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async exportUnparsedLocationsToCSVAndSendEmail(
    email: string,
    country: CountryEntity,
    unparsedLocations: UnparsedLocation[],
  ): Promise<LibraryResponse<any>> {
    const dataAsBase64 = await this.exportUnparsedLocationsToCSV(
      country.name,
      unparsedLocations,
    );

    if (!dataAsBase64) {
      return;
    }

    return this.notificationService
      .sendEmail(
        EMAIL_TEMPLATES.EXPORT_TO_CSV,
        {},
        {},
        [{ Email: email }],
        [
          {
            ContentType: 'text/csv',
            Filename: `exported-data-${country.code}-${format(
              new Date(),
              'yyyy-MM-dd_hh:mm:ss',
            )}.csv`,
            Base64Content: dataAsBase64,
          } as any,
        ],
      )
      .catch((error) => {
        this.logger.error(error);
        return error;
      });
  }

  async getCountryByRegionId(regionId: number): Promise<CountryEntity> {
    const administrativeData =
      await this.administrativeDataRepository.findOneOrFail({
        where: { id: regionId },
        relations: ['country'],
      });
    const country = administrativeData?.country;
    return country;
  }
}
