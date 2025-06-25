import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import getRandomValueWithExcluded from './get-random-value-with-excluded';

const getRandomThematic = (
  thematics: ThematicEntity[],
  excluded: ThematicEntity[] = [],
): ThematicEntity => {
  return getRandomValueWithExcluded(
    thematics.filter(
      (element) =>
        !excluded
          .map((item) => item.parentThematicId)
          .includes(element.parentThematicId),
    ),
  );
};

export default getRandomThematic;
