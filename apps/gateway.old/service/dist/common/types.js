"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHierarchy = exports.StoryOrderEnum = exports.StoryModeratorOrderEnum = exports.OrderEnum = exports.TypeEnum = exports.CATEGORY_VALUE = exports.GENDER_VALUE = exports.DIFFICULTY_VALUE = exports.AGE_VALUE = exports.TIME_UNIT = exports.REJECT_REASON_CODE = void 0;
exports.REJECT_REASON_CODE = {
    POOR_AUDIO_QUALITY: 'poorAudioQuality',
    OTHER: 'other',
};
exports.TIME_UNIT = {
    DAY: 'day',
    MONTH: 'month',
    YEAR: 'year',
};
exports.AGE_VALUE = {
    '1-14': 7,
    '14-17': 1,
    '18-29': 2,
    '30-59': 3,
    '60+': 4,
    'No answer': 0,
};
exports.DIFFICULTY_VALUE = {
    NO: 0,
    YES: 1,
    NO_ANSWER: 2,
};
exports.GENDER_VALUE = {
    FEMALE: 1,
    MALE: 2,
    NON_BINARY: 3,
    NO_ANSWER: 0,
};
exports.CATEGORY_VALUE = {
    THANKS: 'thanks',
    QuESTION: 'question',
    OPINION: 'opinion',
    CONCERN: 'concern',
    REQUEST: 'request',
};
var TypeEnum;
(function (TypeEnum) {
    TypeEnum["published"] = "published";
    TypeEnum["rejected"] = "rejected";
    TypeEnum["new"] = "new";
})(TypeEnum || (exports.TypeEnum = TypeEnum = {}));
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["asc"] = "ASC";
    OrderEnum["desc"] = "DESC";
})(OrderEnum || (exports.OrderEnum = OrderEnum = {}));
var StoryModeratorOrderEnum;
(function (StoryModeratorOrderEnum) {
    StoryModeratorOrderEnum["NEWEST_FIRST"] = "desc";
    StoryModeratorOrderEnum["OLDEST_FIRST"] = "asc";
    StoryModeratorOrderEnum["NOT_STARTED"] = "not_started";
    StoryModeratorOrderEnum["PENDING_PUBLICATION"] = "pending_publication";
})(StoryModeratorOrderEnum || (exports.StoryModeratorOrderEnum = StoryModeratorOrderEnum = {}));
var StoryOrderEnum;
(function (StoryOrderEnum) {
    StoryOrderEnum["NEWEST_FIRST"] = "desc";
    StoryOrderEnum["OLDEST_FIRST"] = "asc";
    StoryOrderEnum["UPVOTED"] = "upvoted";
})(StoryOrderEnum || (exports.StoryOrderEnum = StoryOrderEnum = {}));
var OrderHierarchy;
(function (OrderHierarchy) {
    OrderHierarchy[OrderHierarchy["STARTS_FROM"] = 1] = "STARTS_FROM";
    OrderHierarchy[OrderHierarchy["OTHERS"] = 2] = "OTHERS";
})(OrderHierarchy || (exports.OrderHierarchy = OrderHierarchy = {}));
//# sourceMappingURL=types.js.map