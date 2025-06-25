import { CountryAdministrativeDataEntity } from '../../src/country/entity/country-administrative-data.entity';
import { StoryAdministrativeDataEntity } from '../../src/story/entity/story-administrative-data.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';

export interface AdministrativeData {
  countryId: number;
  parentId?: number;
  level?: number;
}

export const getAdministrativeDataStub = (
  data: AdministrativeData,
): CountryAdministrativeDataEntity => {
  const administrativeData = new CountryAdministrativeDataEntity();

  administrativeData.hasChild = false;
  administrativeData.countryId = data.countryId;
  administrativeData.parentId = data.parentId ?? null;
  administrativeData.level = data.level ?? (data.parentId ? 2 : 1);

  return administrativeData;
};

export const addAdministrativeData = async (
  data: AdministrativeData,
): Promise<CountryAdministrativeDataEntity> => {
  const connection = await getConnection(config);
  const administrativeData = getAdministrativeDataStub(data);

  return connection
    .getRepository(CountryAdministrativeDataEntity)
    .save(getAdministrativeDataStub(administrativeData));
};

export const getAdministrativeDataByStoryId = async (
  storyId: string,
): Promise<StoryAdministrativeDataEntity[]> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryAdministrativeDataEntity)
    .find({ where: { storyId: storyId } });
};

export const assignAdministrativeDataToStory = async (
  regionId: number,
  storyId: string,
): Promise<StoryAdministrativeDataEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryAdministrativeDataEntity)
    .save({ storyId, administrativeAreaId: regionId });
};

export const getRegions = async (): Promise<
  CountryAdministrativeDataEntity[]
> => {
  const connection = await getConnection(config);

  return connection.getRepository(CountryAdministrativeDataEntity).find();
};

export const getRandomRegion = (
  regions: CountryAdministrativeDataEntity[],
  excluded: number[] = [],
): CountryAdministrativeDataEntity => {
  return getRandomValueWithExcluded(
    regions.filter((item) => !excluded.includes(item.id)),
  );
};

export const findParentsById = async (
  id: number,
  parents: CountryAdministrativeDataEntity[] = [],
): Promise<CountryAdministrativeDataEntity[]> => {
  const connection = await getConnection(config);

  const item = await connection
    .getRepository(CountryAdministrativeDataEntity)
    .findOne({ where: { id } });

  if (item) {
    parents.push(item);
  }

  if (!item?.parentId) {
    return parents;
  }

  return findParentsById(item?.parentId, parents);
};
