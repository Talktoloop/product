import { AppPreinitService } from './app-preinit.service';

export function appPreInit(appPreinitService: AppPreinitService): () => Promise<any> {
  return (): Promise<any> => appPreinitService.preInit();
}
