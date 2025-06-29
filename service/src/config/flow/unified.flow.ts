import { FlowRecordInterface } from '../../common/interface/flow-record';
import { MessageType } from '../../common/enum/message-type.enum';
import { Flow } from '../../common/enum/flow.enum';
import { getLocalizedTemplate, TwilioLocalizedTemplates } from '../../common/constant/twilio-templates';
import { TwilioTemplateKey } from '../../common/enum/twilio-template-key.enum';

export const unifiedFlow = async (lang: keyof typeof TwilioLocalizedTemplates): Promise<FlowRecordInterface[]> => {
  
  return [
    {
      flowId: Flow.SHARE_ANONYMOUS,
      nextFlowId: {
        YES: Flow.SHARE_STORY,
        NO: Flow.PUBLISH_CONSENT_DENIED,
      },
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: 'IF_SENSITIVE_STORY',
        },
        {
          type: MessageType.MESSAGE,
          contentSid: getLocalizedTemplate(lang, TwilioTemplateKey.PUBLISH_CONSENT),
          translationId: TwilioTemplateKey.PUBLISH_CONSENT,
          contentVariableName: 'title_consent',
          customHandler: Flow.PUBLISH_CONSENT,
          fallbackFlow: Flow.PUBLISH_CONSENT,
        },
      ],
    },
    {
      flowId: Flow.PUBLISH_CONSENT,
      nextFlowId: {
        YES: Flow.SHARE_STORY,
        NO: Flow.PUBLISH_CONSENT_DENIED,
      },
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          contentSid: getLocalizedTemplate(lang, TwilioTemplateKey.PUBLISH_CONSENT),
          translationId: TwilioTemplateKey.PUBLISH_CONSENT,
          contentVariableName: 'title_consent',
          customHandler: Flow.PUBLISH_CONSENT,
          fallbackFlow: Flow.PUBLISH_CONSENT,
        },
      ],
    },
    {
      flowId: Flow.PUBLISH_CONSENT_DENIED,
      nextFlowId: {
        YES: Flow.CHANGE_LANG,
      },
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          contentSid: getLocalizedTemplate(lang, TwilioTemplateKey.GET_STARTED),
          translationId: 'PUBLISH_CONSENT_DENIED',
          contentVariableName: 'title',
          customHandler: Flow.PUBLISH_CONSENT_DENIED,
          fallbackFlow: Flow.PUBLISH_CONSENT_DENIED,
        },
      ],
    },
    {
      flowId: Flow.SHARE_STORY,
      nextFlowId: Flow.SHARE_ADDITIONAL_INFO,
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: 'PUBLISH_CONSENT_GIVEN',
          customHandler: Flow.SHARE_STORY,
        },
      ],
    },
    {
      flowId: Flow.SHARE_ADDITIONAL_INFO,
      nextFlowId: Flow.DEMOGRAPHICS,
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: 'SHARE_ADDITIONAL_INFO',
          customHandler: Flow.SHARE_ADDITIONAL_INFO,
        },
      ],
    },
    {
      flowId: Flow.DEMOGRAPHICS,
      nextFlowId: Flow.THANKS,
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: Flow.DEMOGRAPHICS.toUpperCase(),
        },
      ],
    },
    {
      flowId: Flow.THANKS,
      nextFlowId: null,
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: Flow.THANKS.toUpperCase(),
        },
        {
          type: MessageType.MESSAGE,
          contentSid: getLocalizedTemplate(lang, TwilioTemplateKey.CONTACT_CONSENT),
          translationId: TwilioTemplateKey.CONTACT_CONSENT,
          contentVariableName: 'title',
          customHandler: Flow.CONTACT_CONSENT,
        },
      ],
    },
    {
      flowId: Flow.CONTACT_CONSENT_APPROVED,
      nextFlowId: null,
      flowMessages: [
        // {
        //   type: MessageType.MESSAGE,
        //   translationId: 'CONTACT_CONSENT_APPROVED',
        // },
        {
          type: MessageType.MESSAGE,
          translationId: Flow.GOODBYE.toUpperCase(),
          finishFlow: true,
        },
      ],
    },
    {
      flowId: Flow.CONTACT_CONSENT_DENIED,
      nextFlowId: null,
      flowMessages: [
        {
          type: MessageType.MESSAGE,
          translationId: 'CONTACT_CONSENT_DENIED',
        },
        {
          type: MessageType.MESSAGE,
          translationId: Flow.GOODBYE.toUpperCase(),
          finishFlow: true,
        },
      ],
    },
  ];
};