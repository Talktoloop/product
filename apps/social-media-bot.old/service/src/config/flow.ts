import { FlowRecordInterface } from '../common/interface/flow-record';
import { thanks } from '../config/flow/thanks.flow';
import { shareStory } from '../config/flow/share-story.flow';
import { createChangLangFlow } from './flow/change-lang.flow';
import { createChooseLangFallbackFlow } from './flow/choose-lang-fallback.flow';
import { shareAdditionalInfo } from './flow/share-additional-info.flow';
import { reuseDetails } from './flow/reuse-details.flow';
import { reuseDetailsFallback } from './flow/reuse-details-fallback.flow';
import { personalDetails } from './flow/personal-details.flow';
import { userAge } from './flow/user-age.flow';
import { userDisability } from './flow/user-disability.flow';
import { userGender } from './flow/user-gender.flow';
import { userName } from './flow/user-name.flow';
import { dontReuseDetails } from './flow/dont-reuse-details.flow';
import { dontReuseDetailsFallback } from './flow/dont-reuse-details-fallback.flow';
import { keepAnonymous } from './flow/keep-anonymous.flow';
import { keepAnonymousFallback } from './flow/keep-anonymous-fallback.flow';
import { CommunicatorConfig } from '../common/type/communicator-config.type';
import { serviceUnavailableStory } from './flow/service-unavailable.flow';

export const createFlowArray = async (
  config: CommunicatorConfig,
  languageCode: string,
) => {
  const supportedLanguages = config.supportedLanguages.map(
    (language) => language.lang,
  );
  const changeLangFlow = await createChangLangFlow(
    supportedLanguages,
    languageCode,
  );
  const changeLangFallbackFlow = await createChooseLangFallbackFlow(
    supportedLanguages,
    languageCode,
  );

  return [changeLangFlow, changeLangFallbackFlow, ...flow];
};

export const flow: Array<FlowRecordInterface> = [
  dontReuseDetails,
  dontReuseDetailsFallback,
  userAge,
  userDisability,
  userGender,
  userName,
  personalDetails,
  reuseDetails,
  reuseDetailsFallback,
  shareAdditionalInfo,
  shareStory,
  thanks,
  keepAnonymous,
  keepAnonymousFallback,
  serviceUnavailableStory,
];
