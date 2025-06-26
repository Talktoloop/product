"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyMessengerDetailsMapper = void 0;
const messages_mapper_1 = require("../../messenger/mapper/messages.mapper");
const story_web_details_mapper_1 = require("./story-web-details.mapper");
const helpers_1 = require("../../common/helpers");
const storyMessengerDetailsMapper = (story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage, messages) => {
    return Object.assign(Object.assign({}, (0, story_web_details_mapper_1.storyWebDetailsMapper)(story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage)), { messages: (0, messages_mapper_1.messageMapper)(messages, story), contactAccepted: (0, helpers_1.isContactAccepted)(story) });
};
exports.storyMessengerDetailsMapper = storyMessengerDetailsMapper;
//# sourceMappingURL=story-messenger-details.mapper.js.map