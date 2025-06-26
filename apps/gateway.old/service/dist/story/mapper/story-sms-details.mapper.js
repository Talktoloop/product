"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storySMSDetailsMapper = void 0;
const messages_mapper_1 = require("../../sms/mapper/messages.mapper");
const story_web_details_mapper_1 = require("./story-web-details.mapper");
const helpers_1 = require("../../common/helpers");
const storySMSDetailsMapper = (story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage, messages) => {
    return Object.assign(Object.assign({}, (0, story_web_details_mapper_1.storyWebDetailsMapper)(story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage)), { messages: (0, messages_mapper_1.messagesMapper)(messages), contactAccepted: (0, helpers_1.isContactAccepted)(story) });
};
exports.storySMSDetailsMapper = storySMSDetailsMapper;
//# sourceMappingURL=story-sms-details.mapper.js.map