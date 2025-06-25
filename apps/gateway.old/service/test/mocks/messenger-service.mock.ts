import { SuccessRO } from '../../src/common/response/success.ro';

export const messengerServiceMock = {
  saveMessengerResponse: (): Promise<SuccessRO> =>
    Promise.resolve({ success: true }),
  sendCommentNotificationToMessenger: jest.fn(async () => ({})),
  checkMessengerAvailability: jest.fn(async () => ({})),
  checkPhoneAvailability: jest.fn(async () => ({})),
};
