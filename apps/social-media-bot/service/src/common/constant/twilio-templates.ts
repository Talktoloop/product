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
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX1fe781b62220b199949685d8bb11e822',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX19e61d77cd7c3cb85434265b98665378',
    [TwilioTemplateKey.GET_STARTED]: 'HXc2e0c5d40685f5f598c38c7f7b7ba3b9',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX965b6025ea3de0aa20209b362e5926d5'
  },

  ar: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX0ec4769f884db762be8014cae5772e17',
    [TwilioTemplateKey.MORE_OPTIONS]: 'HXd4e9ac57d23fb5b284e078cfcb79a0b9',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HXa2a46ede90fd785bbdcf937e0b13e3dd',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HXcbbf70295548b75fac629ad7b0297f3c',
    [TwilioTemplateKey.GET_STARTED]: 'HXc8d3aed81803fb364d953fab54e4bd25',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HXc07f4f6979b7ec0ddb7c1db5a5dc0bf1'
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
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX1ab83d28250e67f5ef74fe7b2f8e853d',
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
    [TwilioTemplateKey.END_OF_SERVICE]: 'HXbfda736b94e5b8ab2f18383d2daf4d5c'
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
