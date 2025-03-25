import { SuccessRO } from '../response/success.ro';

export const responseToSuccessRO = (success: boolean): SuccessRO => {
  return { success };
};
