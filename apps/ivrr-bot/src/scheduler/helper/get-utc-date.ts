import { addMinutes } from 'date-fns';

export const getUTCDate = (): Date =>
  addMinutes(new Date(), new Date().getTimezoneOffset());
