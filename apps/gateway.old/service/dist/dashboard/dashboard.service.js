"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const story_repository_1 = require("../story/repository/story.repository");
const comment_repository_1 = require("../comment/repository/comment.repository");
const shared_1 = require("@ourloop/shared");
let DashboardService = class DashboardService {
    constructor(storyRepository, commentRepository) {
        this.storyRepository = storyRepository;
        this.commentRepository = commentRepository;
    }
    async getNumberOfIncomingStoriesAndComments(params) {
        const [numberOfStories, numberOfComments] = await Promise.all([
            this.storyRepository.getNumberOfPendingStories(params),
            this.commentRepository.getNumberOfComments(params, [
                shared_1.COMMENT_STATUS.PENDING_REVIEW,
                shared_1.COMMENT_STATUS.PENDING_EDIT,
            ]),
        ]);
        return {
            numberOfStories,
            numberOfComments,
        };
    }
    async getNumberOfOutgoingComments(params) {
        const [numberOfPendingRecordingComments, numberOfScheduledComments] = await Promise.all([
            this.commentRepository.getNumberOfComments(params, [
                shared_1.COMMENT_STATUS.PENDING_RECORDING,
            ]),
            this.commentRepository.getNumberOfComments(params, [
                shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
            ]),
        ]);
        return {
            numberOfPendingRecordingComments,
            numberOfScheduledComments,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [story_repository_1.StoryRepository,
        comment_repository_1.CommentRepository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map