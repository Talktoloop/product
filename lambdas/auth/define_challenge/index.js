exports.handler = async (event) => {
  // 1) Normalize session array
  const session = Array.isArray(event.request.session)
    ? event.request.session
    : [];

  // 2) If no prior challenges, kick off a CUSTOM_CHALLENGE
  if (session.length === 0) {
    event.response.issueTokens        = false;
    event.response.failAuthentication = false;
    event.response.challengeName      = 'CUSTOM_CHALLENGE';
    return event;
  }

  // 3) Otherwise, inspect the last challenge result
  const lastAttempt = session[session.length - 1];
  const passed      = lastAttempt.challengeResult === true;

  if (passed) {
    // user answered correctly—issue tokens!
    event.response.issueTokens        = true;
    event.response.failAuthentication = false;
  } else {
    // user failed (or result was undefined)—either re-challenge or fail
    event.response.issueTokens        = false;
    event.response.failAuthentication = false;    // or `true` if you want to lock them out
    event.response.challengeName      = 'CUSTOM_CHALLENGE';
  }

  return event;
};
