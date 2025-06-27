import { OutboxTable } from '../../shared/outbox-table.model';

export const inProgressColumns: OutboxTable[] = [
  new OutboxTable('datetime', 'admin.table.dateTime'),
  new OutboxTable('categories', 'admin.table.storyType'),
  new OutboxTable('language', 'admin.table.language'),
  new OutboxTable('country', 'admin.table.country'),
  new OutboxTable('channel', 'admin.table.channel'),
  new OutboxTable('status', 'admin.table.status'),
];
