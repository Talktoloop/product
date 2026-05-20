import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
import getRandomValueWithExcluded from './get-random-value-with-excluded';

const getRandomDifficulty = (
  difficulties: DifficultyEntity[],
  excluded: number[] = [],
): DifficultyEntity => {
  return getRandomValueWithExcluded(
    difficulties.filter((item) => !excluded.includes(item.id)),
  );
};

export default getRandomDifficulty;
