export const commentNotificationServiceMock = {
  sendNotificationsAfterCommentPublication: jest.fn(async () => ({})),
  sendNotificationsAfterRejectingComment: jest.fn(async () => ({})),
  sendNotificationsToStoryOwnerAfterCommentPublication: jest.fn(
    async () => ({}),
  ),
};
