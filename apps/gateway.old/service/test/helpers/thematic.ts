import { ThematicEntity } from '../../src/lexicon/entity/thematic.entity';

export const checkThematicProperties = (
  responseData: { code: string; children: { id: number; code: string }[] },
  dbData: ThematicEntity[],
): void => {
  expect(responseData.code !== undefined).toBeTruthy();
  expect(
    dbData.filter(
      (entity: ThematicEntity) =>
        entity.code === responseData.code && entity.parentThematicId === null,
    ).length,
  ).toBe(1);
  expect(Array.isArray(responseData.children)).toBeTruthy();

  let themtic: ThematicEntity;

  for (const child of responseData.children) {
    themtic = dbData.filter((entity) => entity.id === child.id)[0];
    expect(themtic).toBeDefined();
    expect(child.id && child.id === themtic.id).toBeDefined();
    expect(child.code && child.code === themtic.code).toBeDefined();
  }
};
