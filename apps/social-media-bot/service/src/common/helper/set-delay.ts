export const setDelay = async (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
