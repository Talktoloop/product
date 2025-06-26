"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyIvrrDetailsMapper = void 0;
const story_web_details_mapper_1 = require("./story-web-details.mapper");
const helpers_1 = require("../../common/helpers");
const call_mapper_1 = require("../../ivrr/mapper/call.mapper");
const storyIvrrDetailsMapper = (story, conversation, historicalContent, storyLanguageId, userLanguageId, defaultLanguage, otherStoriesSameRecipient) => {
    return Object.assign(Object.assign({}, (0, story_web_details_mapper_1.storyWebDetailsMapper)(story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage)), { calls: (0, call_mapper_1.callMapper)(conversation), contactAccepted: (0, helpers_1.isContactAccepted)(story), otherStoriesSameRecipient });
};
exports.storyIvrrDetailsMapper = storyIvrrDetailsMapper;
//# sourceMappingURL=story-ivrr-details.mapper.js.map