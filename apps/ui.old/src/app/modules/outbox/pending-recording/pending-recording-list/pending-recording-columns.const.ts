import { OutboxTable } from '../../shared/outbox-table.model';

export const pendingRecordingColumns: OutboxTable[] = [
  new OutboxTable('datetime', 'outbox.table.dateTime'),
  new OutboxTable('content', 'outbox.table.reply'),
  new OutboxTable('authorNickname', 'outbox.table.moderator'),
  new OutboxTable('targetLanguage', 'outbox.table.targetLanguage'),
];
