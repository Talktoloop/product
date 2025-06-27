import { CONFIG } from '@core/services/config/config.service';
import { prepareUrl } from '@shared/utils/prepare-url';
import { Subject } from 'rxjs';

export abstract class ApiService {
  protected cancelCurrentRequest$ = new Subject();

  private getApiUrl(): string {
    return CONFIG.apiUrl;
  }

  protected getRequestUrl(endpoint: string, replacements = {}): string {
    let finalEndpoint = endpoint;
    Object.keys(replacements).forEach((key) => {
      finalEndpoint = finalEndpoint.replace(key, replacements[key]);
    });
    return prepareUrl(this.getApiUrl(), finalEndpoint);
  }
}
