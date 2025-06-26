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
exports.POSTHOG_EVENTS = exports.PosthogService = void 0;
const common_1 = require("@nestjs/common");
const posthog_node_1 = require("posthog-node");
let PosthogService = class PosthogService {
    constructor() {
        this.posthog = new posthog_node_1.PostHog(process.env.POSTHOG_KEY, {
            host: process.env.POSTHOG_HOST,
        });
    }
    trackEvent(event, userId, properties) {
        try {
            this.posthog.capture({
                distinctId: userId,
                event: event,
                properties: properties,
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    trackDataExport(userId, method) {
        this.trackEvent(POSTHOG_EVENTS.DATA_EXPORTED_BE, userId, { method });
    }
};
exports.PosthogService = PosthogService;
exports.PosthogService = PosthogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PosthogService);
var POSTHOG_EVENTS;
(function (POSTHOG_EVENTS) {
    POSTHOG_EVENTS["LOGIN"] = "Log in";
    POSTHOG_EVENTS["USED_FILTER"] = "Used filter";
    POSTHOG_EVENTS["SUBMIT_REPLY"] = "Submit reply";
    POSTHOG_EVENTS["SUBMIT_FEEDBACK"] = "Submit feedback";
    POSTHOG_EVENTS["DATA_EXPORTED_FE"] = "Data exported app";
    POSTHOG_EVENTS["DATA_EXPORTED_BE"] = "Data exported gateway";
})(POSTHOG_EVENTS || (exports.POSTHOG_EVENTS = POSTHOG_EVENTS = {}));
//# sourceMappingURL=posthog.service.js.map