import { FlowRecordInterface } from '../common/interface/flow-record';
import { createChangLangFlow } from './flow/change-lang.flow';
import { createChooseLangFallbackFlow } from './flow/choose-lang-fallback.flow';
import { CommunicatorConfig } from '../common/type/communicator-config.type';
import { unifiedFlow } from './flow/unified.flow';
import { TwilioLocalizedTemplates } from '../common/constant/twilio-templates';

export const createFlowArray = async (
  config: CommunicatorConfig,
  languageCode: string,
): Promise<Array<FlowRecordInterface>> => {
  const supportedLanguages = config.supportedLanguages.map(
    (language) => language.lang,
  );
  
  const changeLangFlow = await createChangLangFlow(
    supportedLanguages,
    languageCode
  );
  
  const changeLangFallbackFlow = await createChooseLangFallbackFlow(
    supportedLanguages,
    languageCode
  );
  
  const customFlow = await unifiedFlow(languageCode as keyof typeof TwilioLocalizedTemplates);
  return [changeLangFlow, changeLangFallbackFlow, ...customFlow];
};

export const flow: Array<FlowRecordInterface> = [];
