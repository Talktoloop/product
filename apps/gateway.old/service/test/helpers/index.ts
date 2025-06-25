import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { subDays, format } from 'date-fns';

export const clearDatabase = async (): Promise<void> => {
  const connection = await getConnection(config);

  try {
    await connection.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    for (const entity of connection.entityMetadatas) {
      if (
        ![
          'language',
          'category',
          'difficulty',
          'organisation',
          'pregnancy_status',
          'reject_reason',
          'thematic',
          'country',
        ].includes(entity.tableMetadataArgs.name)
      ) {
        await connection
          .getRepository(entity.name)
          .query(`TRUNCATE table ${entity.tableMetadataArgs.name};`);
      }
    }
    await connection.getRepository(LanguageEntity).delete({ isDefault: false });
    await connection.query(`SET FOREIGN_KEY_CHECKS = 1;`);
  } catch (error) {
    await connection.query(`SET FOREIGN_KEY_CHECKS = 1;`);

    throw new Error(`ERROR: Cleaning test db: ${error}`);
  }
};

export const checkCustomPagination = (
  responseData: any,
  params: { page: number; limit: number },
) => {
  expect(responseData.status).toBe(200);
  expect(responseData.body.page).toBe(params.page);
  expect(responseData.body.limit).toBe(params.limit);
  expect(responseData.body).toHaveProperty('totalCount');
  expect(Array.isArray(responseData.body.data)).toBeTruthy();
};

export const checkPagination = (
  responseData: any,
  params: { page: number; limit: number },
) => {
  expect(responseData.status).toBe(200);
  expect(responseData.body).toHaveProperty('meta');
  expect(responseData.body.meta).toHaveProperty('totalItems');
  expect(responseData.body.meta).toHaveProperty('itemCount');
  expect(responseData.body.meta).toHaveProperty('totalPages');
  expect(responseData.body.meta.currentPage).toBe(params.page);
  expect(responseData.body.meta.itemsPerPage).toBe(params.limit);
  expect(Array.isArray(responseData.body.items)).toBeTruthy();
};

export const ifMonthDifferenceGreaterThan1 = (): boolean =>
  [1, -11].includes(
    parseInt(format(new Date(), 'M')) -
      parseInt(format(subDays(new Date(), 31), 'M')),
  );
