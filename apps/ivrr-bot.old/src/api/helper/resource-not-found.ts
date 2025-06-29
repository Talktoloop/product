export const checkIfResourceNotFound = (error: Error): boolean =>
  error.message.includes('The requested resource') &&
  error.message.includes('was not found');
