// Constants ported verbatim from share/interfaces/* in the legacy repo.
// Kept as plain JS objects + frozen so values are immutable.

const SourceType = Object.freeze({
  STORY: 'story',
  COMMENT: 'comment',
});

const ProviderType = Object.freeze({
  AWS: 'aws',
  GOOGLE: 'google',
});

const TranslationStatus = Object.freeze({
  TRANSLATING: 1,
  TRANSLATED: 2,
  ERROR: 3,
});

const LanguageTranslatableByGoogle = Object.freeze({
  EN: 'en',
  FR: 'fr',
  ES: 'es',
  AR: 'ar',
  SO: 'so',
  ID: 'id',
});

const STORY_STATUS = Object.freeze({
  PENDING_TRANSLATION: 'pending_translation',
  PENDING_TRANSCRIPTION: 'pending_transcription',
  TRANSCRIPTION_IN_PROGRESS: 'transcription_in_progress',
  SENT_FROM_CASE_MANAGER_TO_LOOP: 'sent_from_case_manager_to_loop',
});

module.exports = {
  SourceType,
  ProviderType,
  TranslationStatus,
  LanguageTranslatableByGoogle,
  STORY_STATUS,
};
