"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayloadFromTranslation = void 0;
const common_1 = require("@nestjs/common");
const getPayloadFromTranslation = (translation) => {
    const logger = new common_1.Logger('AWS');
    try {
        logger.log('getPayloadFromTranslation');
        const { body } = JSON.parse(translation.Payload.toString());
        logger.log('body = ', body);
        const translatedText = JSON.parse(body).message.TranslatedText;
        return translatedText;
    }
    catch (error) {
        logger.error('Incorrect AWS response getPayloadFromTranslation', error);
        return '';
    }
};
exports.getPayloadFromTranslation = getPayloadFromTranslation;
//# sourceMappingURL=aws.js.map