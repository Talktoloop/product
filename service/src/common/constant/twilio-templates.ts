import { TwilioTemplateKey } from '../enum/twilio-template-key.enum';

export const TwilioLocalizedTemplates = {
  en: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX76715f781a45be5fadc5b573e253dd51',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX231f9bdba6d971a7ad5b249e55b9e1dd',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX8e0457549a4f057ea1757892d2a83894',
    [TwilioTemplateKey.GET_STARTED]: 'HX5cca40395f16fc257f30b096899bdf4f',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX286a190edd233190c97a6a2558357ce8'
  },
  fr: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HXeaaad098f4f52fb5f0f1b8fc0f7ac39f',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HX49d9de2f33a32dbfa61188155b935cd9',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX00855e5052c90c5b294cb88957940fea',
    [TwilioTemplateKey.GET_STARTED]: 'HX299703a847d0bbc6362e57f05e42eb4a',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX17f64804557cc2bfa4d95a20b192d723'
  },
  ar: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX508a8ccb0c94f6ce3415ccfa401fea8f',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HXa2a46ede90fd785bbdcf937e0b13e3dd',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HXcbbf70295548b75fac629ad7b0297f3c',
    [TwilioTemplateKey.GET_STARTED]: 'HXc8d3aed81803fb364d953fab54e4bd25',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HXc07f4f6979b7ec0ddb7c1db5a5dc0bf1'
  },
  es: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HX3661f563eac948ac4d44eb547e2f98c6',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HXf8f02ed8725ad3386b44806a13910455',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX8483946bdba68ef6a9ae31470bb1b3d6',
    [TwilioTemplateKey.GET_STARTED]: 'HX2b2b4603f0813cb18543264af5112a19',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HXa543a1f045a589dc76b08ab3d9e8ac34'
  },
  so: {
    [TwilioTemplateKey.CHOOSE_LANG]: 'HXe3fabda0a5f4cbc2d84ce0dc4810d435',
    [TwilioTemplateKey.PUBLISH_CONSENT]: 'HXe99100035c68304f37ae046835954b0a',
    [TwilioTemplateKey.CONTACT_CONSENT]: 'HX4aead4e96e913cba07c07375a4edc191',
    [TwilioTemplateKey.GET_STARTED]: 'HX1b3aad8fb69e23279924f0a7e0cd24b2',
    [TwilioTemplateKey.END_OF_SERVICE]: 'HX52673af44002eb1462cd32090577b65c'
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
