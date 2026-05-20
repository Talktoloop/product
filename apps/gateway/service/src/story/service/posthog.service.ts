import { Injectable } from '@nestjs/common';
import { PostHog } from 'posthog-node'

@Injectable()
export class PosthogService {
    posthog: PostHog
    constructor() {
        this.posthog = new PostHog(process.env.POSTHOG_KEY, {
            host: process.env.POSTHOG_HOST,
        });
    }

    trackEvent(event: string, userId: string, properties?: Record<string, any>) {
        try {
            this.posthog.capture({
                distinctId: userId,
                event: event,
                properties: properties,
            });
        } catch (error) {
            console.error(error)
        }
    }

    trackDataExport(userId: string, method: string) {
        this.trackEvent(POSTHOG_EVENTS.DATA_EXPORTED_BE, userId, { method });
    }
}

export enum POSTHOG_EVENTS {
    LOGIN = 'Log in',
    USED_FILTER = 'Used filter',
    SUBMIT_REPLY = 'Submit reply',
    SUBMIT_FEEDBACK = 'Submit feedback',
    DATA_EXPORTED_FE = 'Data exported app',
    DATA_EXPORTED_BE = 'Data exported gateway',
}