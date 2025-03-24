/**
 * AWS Lambda handler for Cognito Pre-Signup trigger
 * @param event - Cognito Pre-Signup event
 * @param context - Lambda execution context
 * @returns Modified event object
 */
export const handler = async (
  event,
  context
) => {
  try {
    // Auto-confirm the user
    event.response = {
      ...event.response,
      autoConfirmUser: true,
      autoVerifyEmail: true
    };
    
    return event
  } catch (error) {
    // Log errors
    console.error('Error in PreSignUp handler', error);
    throw error
  }
}
