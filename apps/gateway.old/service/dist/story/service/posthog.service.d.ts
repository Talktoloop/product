import { PostHog } from 'posthog-node';
export declare class PosthogService {
    posthog: PostHog;
    constructor();
    trackEvent(event: string, userId: string, properties?: Record<string, any>): void;
    trackDataExport(userId: string, method: string): void;
}
export declare enum POSTHOG_EVENTS {
    LOGIN = "Log in",
    USED_FILTER = "Used filter",
    SUBMIT_REPLY = "Submit reply",
    SUBMIT_FEEDBACK = "Submit feedback",
    DATA_EXPORTED_FE = "Data exported app",
    DATA_EXPORTED_BE = "Data exported gateway"
}
