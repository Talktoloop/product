import { MAIN_ROUTES } from '@app/app-routing.props';
import { prepareGuardRoute } from '@shared/utils/prepare-guard-route';

const getRoute = (route: string): string => {
  return prepareGuardRoute(route);
};

export const MENU_LINKS = {
  feedback: { route: getRoute(MAIN_ROUTES.STORIES), protected: false, exact: false },
  statistics: { route: getRoute(MAIN_ROUTES.STATISTICS), protected: false, exact: false },
  inbox: { route: getRoute(`${MAIN_ROUTES.INBOX}`), protected: true, exact: false },
  outbox: { route: getRoute(`${MAIN_ROUTES.OUTBOX}`), protected: true, exact: false },
};

export const SOCIAL_LINKS = [
  { url: 'https://twitter.com/talktoloop', code: 'navbar.social.twitterLabel', target: '_blank', imagePath: 'assets/social/twitter.svg' },
  {
    url: 'https://www.facebook.com/TalkToLoop/',
    code: 'navbar.social.facebookLabel',
    target: '_blank',
    imagePath: 'assets/social/facebook.svg',
  },
];

export const STATIC_LINKS = [
  { code: 'navbar.static.privacyPolicyLabel', target: '_blank', url: 'https://www.iubenda.com/privacy-policy/99407557' },
  { code: 'navbar.static.cookiePolicyLabel', target: '_blank', url: 'https://www.iubenda.com/privacy-policy/99407557/cookie-policy' },
  // { code: 'navbar.static.termsOfUseLabel', url: 'https://TalkToLoop.org' },
];

export const MENU_STATIC_LINKS = [
  { code: 'navbar.static.loopWebsiteLabel', target: '_blank', url: 'https://TalkToLoop.org' },
  // { code: 'navbar.static.contactLabel', target: '_blank', url: 'https://TalkToLoop.org/contact' },
  { code: 'navbar.static.communityGuidelinesLabel', routerLink: MAIN_ROUTES.COMMUNITY_GUIDELINES },
];
