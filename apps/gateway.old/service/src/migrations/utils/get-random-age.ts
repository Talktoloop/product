import { AGE_VALUE } from '../../common/types';
import getRandomValueWithExcluded from './get-random-value-with-excluded';

const getRandomAge = (excluded: number[] = []): number => {
  return getRandomValueWithExcluded(
    Object.values(AGE_VALUE).filter(
      (value) => Number.isInteger(value) && !excluded.includes(value),
    ),
  );
};

export default getRandomAge;
