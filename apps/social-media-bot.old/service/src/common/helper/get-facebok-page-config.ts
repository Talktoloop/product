import { FacebookPageConfigInterface } from '../interface/facebook-page-config';
import configuration from '../../config/default';

export const getFacebokPageConfig = async (
  pageId: string,
): Promise<FacebookPageConfigInterface> => {
  const config = await configuration();

  return config.application.facebook.pages.find(
    (page) => page.pageId === pageId,
  );
};
