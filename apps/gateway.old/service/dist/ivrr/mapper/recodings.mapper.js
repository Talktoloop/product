"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordingsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const recordings_ro_1 = require("../response/recordings.ro");
const recordingsMapper = (data, language) => {
    return (0, class_transformer_1.plainToClass)(recordings_ro_1.RecordingsRO, {
        intro: data.reply.intro[language],
        outro: data.reply.outro[language],
    });
};
exports.recordingsMapper = recordingsMapper;
//# sourceMappingURL=recodings.mapper.js.map