const REJECT_REASON_TEXT_BY_CODE: Record<string, Record<string, string>> = {
  communityStandards: {
    en: 'Violates community standards',
  },
  duplicate: {
    en: 'Duplicate',
    ar: 'مكرر',
    fr: 'Duplique',
    sw: 'Rudia',
    so: 'Calaamaddeeda horay ayaa loo daabacay',
    es: 'Duplicado',
  },
  'story/replyHasOffensiveOrDiscriminatoryLanguageInIt': {
    en: 'The feedback or reply contains offensive, abusive or discriminatory language',
    ar: 'احتواء الملاحظة أو الرد على لغة مسيئة أو بذيئة أو تمييزية',
    fr: "Le retour d'information ou la réponse contient un langage offensant, abusif ou discriminatoire.",
    sw: 'Maoni ina lugha ya matusi, udhalilishaji, au ubaguzi',
    so: 'Farriinta ama jawaabta ayaa ah luuqad af-lagaaddo ah, xad-gudub  ama takoor ah',
    es: 'La retroalimentacion o respuesta contiene lenguaje ofensivo, abusivo o discriminatorio',
  },
  'story/replyDoesNotFollowTheCommunityStandards': {
    en: 'The feedback or reply does not follow the community standards designed to ensure a safe and inclusive space',
    ar: 'عدم التزام الملاحظة أو الرد بالمعايير المجتمعية المصممة لضمان مساحة آمنة وشاملة',
    fr: "Le retour d'information ou la reponse ne respecte pas les normes de la communaute concues pour garantir un espace sur et inclusif",
    sw: 'Maoni au majibu haya hayafuati kanuni za jamii zilizowekwa ili kuhakikisha nafasi salama na ya wote',
    so: 'Farriin ama jawaab aan raacin xeerarka bulshada ee loogu talagalay in lagu hubiyo goob badqabdo oo loo dhan yahay',
    es: 'La retroalimentacion o respuesta no sigue los estandares comunitarios disenados para garantizar un espacio seguro e inclusivo',
  },
  'thereIsConcernAboutTheAuthenticityOfTheStory/reply': {
    en: 'There is a concern about the authenticity of the feedback or reply',
    ar: 'وجود مخاوف بشأن صحة الملاحظة أو الرد',
    fr: "Il y a une inquietude quant a l'authenticite du retour d'information ou de la reponse",
    sw: 'Kuna shaka kuhusu ukweli wa maoni',
    so: 'Waxa jira walaac ku saabsan saxnaanta farriinta ama jawaabta',
    es: 'Preocupacion sobre la autenticidad de la retroalimentacion o respuesta',
  },
  'thereWasConcernThatTheStory/replyCouldCauseHarmIfPostedPublicly': {
    en: 'The feedback or reply could cause harm if posted publicly',
    ar: 'احتمال تسبب الملاحظة أو الرد في إحداث الضرر إذا نُشر علناً',
    fr: "Le retour d'information ou la reponse pourrait causer du tort s'il est affiche publiquement",
    sw: 'Maoni yanayoweza kuleta madhara ukipostiwa hadharani',
    so: 'Farriin ama jawaab sababi karta dhibaato haddii dadweynaha lala wadaago.',
    es: 'La retroalimentacion o respuesta podria causar dano si se hace publica',
  },
  'story/replyDoesNotRespectTheRightToPrivacyOfOthers': {
    en: 'The feedback or reply does not respect the right of privacy of others',
    ar: 'عدم احترام الملاحظة أو الرد لحق الآخرين في الخصوصية',
    fr: "Le retour d'information ou la reponse ne respecte pas le droit a la vie privee d'autrui",
    sw: 'Maoni au majibu hayaheshimu faragha ya wengine',
    so: 'Farriin ama jawaab aan ixtiraamayn xuquuqda asturnaanta dadka kale',
    es: 'La retroalimentacion o respuesta no respeta el derecho a la privacidad de otros',
  },
};

const CODE_ALIASES: Record<string, string> = {
  storyOrReplyHasOffensiveOrDiscriminatoryLanguageInIt:
    'story/replyHasOffensiveOrDiscriminatoryLanguageInIt',
  storyOrReplyDoesNotFollowTheCommunityStandards:
    'story/replyDoesNotFollowTheCommunityStandards',
  concernAboutAuthenticity: 'thereIsConcernAboutTheAuthenticityOfTheStory/reply',
  concernCouldCauseHarmIfPostedPublicly:
    'thereWasConcernThatTheStory/replyCouldCauseHarmIfPostedPublicly',
  storyOrReplyDoesNotRespectTheRightToPrivacyOfOthers:
    'story/replyDoesNotRespectTheRightToPrivacyOfOthers',
};

export const getRejectReasonLocalizedText = (
  reasonCode: string,
  languageCode: string,
): string | null => {
  const normalizedCode = CODE_ALIASES[reasonCode] || reasonCode;
  const translations = REJECT_REASON_TEXT_BY_CODE[normalizedCode];

  if (!translations) return null;
  return translations[languageCode] || translations.en || null;
};
