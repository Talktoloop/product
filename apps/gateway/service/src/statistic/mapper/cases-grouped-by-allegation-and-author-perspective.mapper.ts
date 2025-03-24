import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { AUTHOR_PERSPECTIVE } from '../../airtable-client/constant/author-perspective.constant';
import { ALLEGATION_TYPE_TEXT } from '../../airtable-client/constant/allegation-type.constant';
import { cloneArrayWithoutReference } from '../../common/helpers';
import { TypeValuesRO } from '../response/type-value.ro';

export const casesGroupedByAllegationAndAuthorPerspectiveMapper = (
  data: (CaseSyncEntity & { count: number; authorPerspective: string })[],
): TypeValuesRO[] => {
  const authorPerspectives = Object.values(AUTHOR_PERSPECTIVE);
  const filteredAuthorPerspectiveKeys: string[] = Object.values(
    AUTHOR_PERSPECTIVE,
  ).filter((key) => key != AUTHOR_PERSPECTIVE.other);

  return Object.keys(ALLEGATION_TYPE_TEXT).map((key) => {
    const values = [] as number[];

    for (const perspective of authorPerspectives) {
      values.push(
        data.find(
          (item) =>
            item.allegationType === ALLEGATION_TYPE_TEXT[key] &&
            (perspective !== AUTHOR_PERSPECTIVE.other
              ? item.authorPerspective === perspective
              : !filteredAuthorPerspectiveKeys.includes(
                  item.authorPerspective,
                )),
        )?.count ?? 0,
      );
    }

    return {
      type: key,
      values: cloneArrayWithoutReference(values),
      isAnonymousData: false,
    };
  });
};
