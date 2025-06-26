"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thematicAreasMapper = void 0;
const thematicAreasMapper = (data) => {
    let codeArray = [];
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
exports.thematicAreasMapper = thematicAreasMapper;
//# sourceMappingURL=thematic-areas.mapper.js.map