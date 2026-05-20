export enum MAIN_ROUTES {
  STORY = 'story',
  STORIES = 'feedback',
  AUTH = 'auth',
  PROFILE = 'profile',
  NEW_STORY = 'provide-feedback',
  ADMIN = 'admin',
  INBOX = 'inbox',
  OUTBOX = 'outbox',
  STATISTICS = 'statistics',
  COMMUNITY_GUIDELINES = 'community-guidelines',
  MAGIC_LINK = 'magic-link',
  LOGIN = 'login',
}

export enum AUTH_ROUTES {
  MAGIC_LINK_LOGIN = 'magic-link-login',
  MAGIC_LINK_SENT = 'magic-link-sent',
  REGISTER = 'register',
  ACCEPT_TERMS = 'accept-terms',
  REGISTER_ORGANIZATION = 'register-organization',
  CREATE_ORGANIZATION = 'create-organization',
}

export enum PROFILE_ROUTES {
  ACCOUNT = '',
}

export enum STORY_ROUTES {
  DETAILS = 'details/:id',
}

export enum ADMIN_ROUTES {
  PENDING = 'pending',
  REJECTED = 'rejected',
}

export enum INBOX_ROUTES {
  STORIES = 'stories',
  REPLIES = 'replies',
}

export enum INBOX_STORY_ROUTES {
  STORY = 'story/:channel/:id',
  STORY_REVIEW = 'review',
  STORY_TRANSLATE = 'translate',
}

export enum INBOX_REPLY_ROUTES {
  REPLY = ':id',
  REPLY_TRANSCRIBE = 'transcribe',
  REPLY_REVIEW_AND_TRANSLATE = 'review-and-translate',
}

export enum OUTBOX_ROUTES {
  PENDING_RECORDING = 'pending-recording',
  IN_PROGRESS = 'in-progress',
  Archive = 'archive',
}

export enum OUTBOX_PENDING_RECORD_ROUTES {
  RECORD = 'record/:id',
}

export enum STATISTICS_ROUTES {
  OPEN_STORIES = 'open-stories',
  SENSITIVE_CASES = 'sensitive-cases',
}
