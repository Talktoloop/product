import { GENDER_VALUE } from '../../common/types';
import getRandomValueWithExcluded from './get-random-value-with-excluded';

const getRandomGender = (excluded: number[] = []): number => {
  return getRandomValueWithExcluded(
    Object.values(GENDER_VALUE).filter(
      (value) => Number.isInteger(value) && !excluded.includes(value),
    ),
  );
};

export default getRandomGender;
