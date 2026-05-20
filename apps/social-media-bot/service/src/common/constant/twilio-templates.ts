import { TwilioTemplateKey } from '../enum/twilio-template-key.enum';

export const TwilioLocalizedTemplates = {
  en: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX5652578c0b2c1acc780d878c47673af7',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HX805f0299064c0fd32411b89f067b5cf3',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX0957dc2e4e5616c089d3391ad3ee9a31',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HXa236d274ac0d480db703a267cae0b918',
    [TwilioTemplateKey.GET_STARTED]: 'HX948288e331819c5b1ff77f92d5baf8c8',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HXd794703040e0ca4a370a73dc0fe657cd'
  },

  fr: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX22534a5f0ec9e8da5c3c4d23370c8638',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HX4c358781f77f9f9773c4a8376c93a2b4',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX34ba7dce0ed4a93f88de23543f87be42',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX19e61d77cd7c3cb85434265b98665378',
    [TwilioTemplateKey.GET_STARTED]: 'HXc2e0c5d40685f5f598c38c7f7b7ba3b9',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX0063d28c5f0d0fd434b8109888501cbc'
  },

  ar: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX0ec4769f884db762be8014cae5772e17',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HXd4e9ac57d23fb5b284e078cfcb79a0b9',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX2d8c88414df13bf80180cdf0c2fb54f2',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX489f124075dd3dbf09e9634f016fbad1',
    [TwilioTemplateKey.GET_STARTED]: 'HX3a03c9077a6b6bfc1ebdef10b2139058',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX1d4798021459f20f5656822c1b09094f'
  },

  es: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX9ceb78e9d7aeda25dadcdeb4013ff0a1',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HXb2af5f9b89a987b2d278f4356ce79d28',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX592b18743d6c0b3dc339e15b94261e29',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HXca01bfd6c4d8b4bce3cf375406714ab5',
    [TwilioTemplateKey.GET_STARTED]: 'HX8e74c39df88522f9ea10916d8ff816f4',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX6b3e59b5b6436362ca8cb9fad74d354f'
  },

  so: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX3cd0ed0dea4942ee2ab96230bbbf185d',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HX656258d028549832941f1ed8f3cbadd8',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HXdd24840597965e4a48fbcb17644d8d0f',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HXe9693782e3fb90cc294e8e4ed87abe6a',
    [TwilioTemplateKey.GET_STARTED]: 'HX7cc849fe08e81bcf265ce0b64668cc42',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX82bbe7cf3d1f82e3c1f5c08d59b11b22'
  },

  sw: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX311536bd69964ca5a5aa6d0df1322dd7',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HXeb8ad4aac7dd3f71fb0b0d795b359e98',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX54e49333af4def0f650877662915c3b5',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX5db373c8fa6353f9f550a1af48cdec58',
    [TwilioTemplateKey.GET_STARTED]: 'HX11c8f65fda1dded71d5239a72fb1b140',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX8e25bd7f9cacbc1122cb209e43c8a1b3'
  },

} as const;

export function getLocalizedTemplate(
  lang: keyof typeof TwilioLocalizedTemplates,
  key: TwilioTemplateKey,
): string {
  return (
    TwilioLocalizedTemplates[lang]?.[key] ??
    TwilioLocalizedTemplates['en'][key]
  );
}
