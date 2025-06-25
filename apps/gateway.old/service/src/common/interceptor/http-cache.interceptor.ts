import { ExecutionContext, Injectable, RequestMethod } from '@nestjs/common';
import { CacheInterceptor, CACHE_KEY_METADATA } from '@nestjs/cache-manager';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.getArgByIndex(0);
    const lang = request.headers['content-language'] || 'en';
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const isHttpApp = httpAdapter && !!httpAdapter.getRequestMethod;
    const cacheMetadata = this.reflector.get(
      CACHE_KEY_METADATA,
      context.getHandler(),
    );
    if (!isHttpApp || cacheMetadata) {
      return `${cacheMetadata}_${lang}`;
    }

    if (httpAdapter.getRequestMethod(request) !== RequestMethod.GET) {
      return undefined;
    }
    return `${httpAdapter.getRequestUrl(request)}_${lang}`;
  }
}
