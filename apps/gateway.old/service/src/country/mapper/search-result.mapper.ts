import { plainToClass } from 'class-transformer';
import { CountryEntity } from '../entity/country.entity';
import {
  SearchResultRO,
  SearchResultItemRO,
} from '../response/search-result.ro';
import { AdministrativeDataWithParents } from '../type/administrative-data-with-parents.type';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { staticConfig } from '../../config/default';
import { LanguageEntity } from '../../language/entity/language.entity';
import {
  filterAdministrativeDataByLanguage,
  findAdministrativeDataByLanguage,
} from './administrative-data.mapper';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
import { upperCaseString } from '../../common/helpers';

export const searchResultMapper = (
  country: CountryEntity,
  params: FindRegionsDTO,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
  data: AdministrativeDataWithParents,
): SearchResultRO => {
  let firstLevelChildrenItems = [];
  let anotherLevelChildrenItems = [];
  let anotherItems = filterAdministrativeDataByLanguage(
    data.items,
    userLanguageId,
    defaultLanguage.id,
  );

  if (params.parentId) {
    const anotherLevelChildrenIds = [];
    const firstLevelChildrenIds = [];

    for (const id in data.parents) {
      if (data.parents[id][0]?.id === params.parentId) {
        firstLevelChildrenIds.push(parseInt(id));
      } else if (data.parents[id].find((item) => item.id === params.parentId)) {
        anotherLevelChildrenIds.push(parseInt(id));
      }
    }

    firstLevelChildrenItems = anotherItems.filter((item) =>
      firstLevelChildrenIds.includes(item.id),
    );
    anotherLevelChildrenItems = anotherItems.filter((item) =>
      anotherLevelChildrenIds.includes(item.id),
    );
    anotherItems = anotherItems.filter(
      (item) =>
        !firstLevelChildrenIds.includes(item.id) &&
        !anotherLevelChildrenIds.includes(item.id),
    );
  }

  let items = [];

  for (const list of [
    firstLevelChildrenItems,
    anotherLevelChildrenItems,
    anotherItems,
  ]) {
    items = [
      ...items,
      ...list.sort(
        (
          prev: AdministrativeDataWithDetails,
          next: AdministrativeDataWithDetails,
        ) => {
          const prevPosition = upperCaseString(prev.name).indexOf(
            upperCaseString(params.phrase),
          );
          const nextPosition = upperCaseString(next.name).indexOf(
            upperCaseString(params.phrase),
          );
          return (
            (prevPosition < 0
              ? staticConfig.administrativeData.maximumLengthOfName
              : prevPosition) -
            (nextPosition < 0
              ? staticConfig.administrativeData.maximumLengthOfName
              : nextPosition)
          );
        },
      ),
    ];
  }

  items = items.slice(0, staticConfig.administrativeData.searchResultLimit);

  return plainToClass(SearchResultRO, {
    countryCode: country.code,
    items: items.map((item) => {
      const parentNames = data.parents[item.id]?.find(
        (parent) => parent.id === item.parentId,
      )?.names;
      const variant = findAdministrativeDataByLanguage(
        parentNames,
        userLanguageId,
        defaultLanguage.id,
        item.defaultLanguageIdForAdministrativeData,
      );

      return plainToClass(SearchResultItemRO, {
        ...item,
        parentName: variant?.name ?? null,
        hasChild: !!item.hasChild,
      });
    }),
  });
};
