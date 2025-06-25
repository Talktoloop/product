import { CountCodeIdWithChildren } from '../interfaces/code-count-id.interface';

export const thematicAreasMapper = (
  data: string[],
): CountCodeIdWithChildren[] => {
  let codeArray: string[] = [];
  return data
    .map((code) => {
      codeArray = code.split('.');

      if (codeArray.length === 1) {
        return {
          code,
          children: data
            .map((subCode) => {
              codeArray = subCode.split('.');

              if (codeArray.length > 1 && codeArray[0] === code) {
                return { code: subCode };
              }
            })
            .filter((item) => item),
        };
      }
    })
    .filter((item) => item);
};
