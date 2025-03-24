/**
 * AWS Lambda handler for Cognito Define Auth Challenge trigger
 * @param {Object} event - Cognito Define Auth Challenge event
 * @param {Object} context - Lambda execution context
 * @returns {Object} Modified event object
 */
exports.handler = async (event, context) => {
    // If user not found, fail authentication
    if (event.request.userNotFound) {
        event.response.issueTokens = false;
        event.response.failAuthentication = true;
        return event;
    }

    // Check if this is the first authentication attempt
    if (event.request.session.length === 0) {
        // Initial challenge - request CUSTOM_CHALLENGE
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
        event.response.challengeName = "CUSTOM_CHALLENGE";
    } else {
        // Check result of last challenge attempt
        const lastAttempt = event.request.session[event.request.session.length - 1];
        
        if (lastAttempt.challengeResult === true) {
            // Successful authentication
            event.response.issueTokens = true;
            event.response.failAuthentication = false;
        } else {
            // Failed authentication
            event.response.issueTokens = false;
            event.response.failAuthentication = true;
        }
    }

    return event;
};
