// Constants ported from share/interfaces/* in the legacy repo.

const SourceType = Object.freeze({
  STORY: 'story',
  COMMENT: 'comment',
});

const TranscriptionStatus = Object.freeze({
  PENDING: 'pending',
  TRANSCRIBING: 'transcribing',
  TRANSCRIBED: 'transcribed',
  ERROR: 'error',
});

// Mirrored from case-manager-sync/models/types/story-status.ts
const STORY_STATUS = Object.freeze({
  PENDING_TRANSCRIPTION: 'pending_transcription',
  TRANSCRIPTION_IN_PROGRESS: 'transcription_in_progress',
  PENDING_TRANSLATION: 'pending_translation',
});

module.exports = { SourceType, TranscriptionStatus, STORY_STATUS };
