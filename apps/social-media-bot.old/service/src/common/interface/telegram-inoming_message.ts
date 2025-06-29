export default interface TelegramIncomingMessageInterface {
  message_id: number;
  channel?: string;
  date: number;
  text: string;
  from: {
    id: number;
    is_bot: boolean;
    first_name: string;
    language_code: string;
  };
}
