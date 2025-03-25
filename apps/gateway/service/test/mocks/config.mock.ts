import { dynamicConfiguration } from '../../src/config/default';
import flat from 'flat';

export const configMock = {
  get: jest.fn((key: number | string) => {
    const data = flat.flatten(dynamicConfiguration());

    return data[key];
  }),
};
