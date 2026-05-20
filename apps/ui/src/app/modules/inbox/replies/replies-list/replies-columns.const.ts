import { InboxTable } from '../../shared/inbox-table.model';

export const repliesColumns: InboxTable[] = [
  new InboxTable('datetime', 'inbox.table.dateTime'),
  new InboxTable('country', 'inbox.table.country'),
  new InboxTable('language', 'inbox.table.language'),
  new InboxTable('channel', 'inbox.table.channel'),
];
