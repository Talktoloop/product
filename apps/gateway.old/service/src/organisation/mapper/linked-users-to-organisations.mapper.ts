import { plainToClass } from 'class-transformer';
import { LinkedUsersToOrganisationsRO } from '../response/linked-users-to-organisations.ro';
import { LibraryResponse } from 'node-mailjet';

export const linkedUsersToOrganisationsMapper = (
  data: Array<LibraryResponse<any>>,
): LinkedUsersToOrganisationsRO => {
  let success = data.length > 0;
  let email: string;
  const emailsWithSuccess = [];
  const emailsFailed = [];

  for (const item of data) {
    email = item?.body?.Messages[0]?.To[0]?.Email;

    if (item?.body?.Messages[0]?.Status !== 'success') {
      success = false;
      if (!emailsFailed.includes(email)) {
        emailsFailed.push(email);
      }
    } else {
      if (!emailsWithSuccess.includes(email)) {
        emailsWithSuccess.push(email);
      }
    }
  }

  return plainToClass(LinkedUsersToOrganisationsRO, {
    success,
    emailsWithSuccess,
    emailsFailed,
  });
};
