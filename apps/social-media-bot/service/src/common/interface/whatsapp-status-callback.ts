export default interface WhatsappStatusCallback {
  smsSid: string;
  messageStatus: string;
  recipientId: string;
  pageId: string;
  errorCode?: string;
}
