import { FacebookPageConfigInterface } from '../interface/facebook-page-config';
import configuration from '../../config/default';

export const getWhatsappNumberConfig = async (
  pageId: string,
): Promise<FacebookPageConfigInterface> => {
  const prefix = 'whatsapp:';
  const config = await configuration();

  return config.application.whatsapp.numbers.find(
    (page) =>
      page.pageId === `${pageId.includes(prefix) ? '' : prefix}${pageId}`,
  );
};
