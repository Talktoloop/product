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
  { url: 'https://x.com/talktoloop', code: 'navbar.social.twitterLabel', target: '_blank', imagePath: 'assets/social/x.svg' },
  {
    url: 'https://www.facebook.com/TalkToLoop/',
    code: 'navbar.social.facebookLabel',
    target: '_blank',
    imagePath: 'assets/social/facebook.svg',
  },
    {
    url: 'https://www.linkedin.com/company/talktoloop',
    code: 'navbar.social.linkedinLabel',
    target: '_blank',
    imagePath: 'assets/social/linkedin.svg',
  },
  {
    url: 'https://xity3.mjt.lu/wgt/xity3/xnz8/form?c=0f8b861a',
    code: 'navbar.social.newsletterLabel',
    target: '_blank',
    imagePath: 'assets/social/newsletter.svg',
  }
];

export const STATIC_LINKS = [
  { code: 'navbar.static.privacyPolicyLabel', target: '_blank', url: 'https://docs.google.com/document/d/1x6ZySRtwZXp44dtxO17ap0x-BM_V8n3Y/edit' },
  { code: 'navbar.static.cookiePolicyLabel', target: '_blank', url: 'https://cdn.prod.website-files.com/66d09c3d470602563f53a069/691332b64e358d111c36d49d_Loop%20Cookie%20Policy%20-%20Septemeber%202025.docx.pdf' },
  // { code: 'navbar.static.termsOfUseLabel', url: 'https://TalkToLoop.org' },
];

export const MENU_STATIC_LINKS = [
  { code: 'navbar.static.loopWebsiteLabel', target: '_blank', url: 'https://TalkToLoop.org' },
  // { code: 'navbar.static.contactLabel', target: '_blank', url: 'https://TalkToLoop.org/contact' },
  { code: 'navbar.static.communityGuidelinesLabel', routerLink: MAIN_ROUTES.COMMUNITY_GUIDELINES },
];
