import { publishCommentCall } from "./ivrr/publish-call-response.event";
import { scheduledCallStart } from "./ivrr/scheduled-call-start.event";

export const functions = [
    publishCommentCall,
    scheduledCallStart
]