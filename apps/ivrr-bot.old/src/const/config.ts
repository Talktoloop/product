export const LANG_EN = 'en';
export const LANG_TL = 'tl';

export const AvailableLangs = [LANG_EN, LANG_TL];
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
