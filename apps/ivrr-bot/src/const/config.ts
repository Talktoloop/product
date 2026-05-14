/**
 * @file config.ts
 * @description IVRR Bot configuration constants - language codes, flow definitions,
 *              message types, and other application-wide settings.
 * @author Palapoorv
 *
 * @changelog
 * - 2026-02-11: Added support for Nyanja, Tonga, and Somali language variants
 *               (ny, tog, so, maa, bnd, bju, bara) to fix "Language not supported
 *               via IVRR" error. Recordings were already configured in default.ts
 *               but these language codes were missing from AvailableLangs.
 */

// Supported language codes
export const LANG_EN = 'en'; // English
export const LANG_TL = 'tl'; // Tagalog
export const LANG_NY = 'ny'; // Nyanja
export const LANG_TOG = 'tog'; // Tonga
export const LANG_SO = 'so'; // Somali (Maxatiri)
export const LANG_MAA = 'maa'; // Somalia-Maay
export const LANG_BND = 'bnd'; // Somali-Banadiri-Marka
export const LANG_BJU = 'bju'; // Somali-Baajuuni
export const LANG_BARA = 'bara'; // Somali-Barawani-Chimini
export const LANG_KIZ = 'kiz'; // Kiziba

/** All languages supported by the IVRR system. Must match keys in recordings config (default.ts). */
export const AvailableLangs = [
  LANG_EN,
  LANG_TL,
  LANG_NY,
  LANG_TOG,
  LANG_SO,
  LANG_MAA,
  LANG_BND,
  LANG_BJU,
  LANG_BARA,
  LANG_KIZ,
];
export const DEFAULT_LANG = LANG_EN;

export enum MessageType {
  MESSAGE = 'message',
  QUICK_REPLIES = 'quick_replies',
  YES_NO = 'yes_no',
}

export const FLOW = {
  WELCOME: 'welcome',
  CHOOSE_LANG: 'chooseLang',
  TALK_TO_LOOP: 'talkToLoop',
  THANKS: 'thanks',
  ANONYMOUS_QUESTION: 'anonymousQuestion',
  ANONYMOUS_QUESTION_FALLBACK: 'anonymousQuestionFallback',
  STAY_ANONYMOUS: 'stayAnonymous',
  PUBLISH_NAME: 'publishName',
  FINISH: 'finishFlow',
};

export enum FlowMessageType {
  SEND,
  RECEIVED,
  MODERATOR_RESPONSE,
}

export const storyFlow = (flow: string): boolean =>
  [FLOW.TALK_TO_LOOP].includes(flow);

export const MAX_STORY_RESPONSE = 320;