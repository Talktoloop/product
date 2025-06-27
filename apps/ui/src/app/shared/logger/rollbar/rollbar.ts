import { Injectable } from '@angular/core';
import * as Rollbar from 'rollbar';
import { DefaultErrorHandler } from '../default-error-handler';
import { getRollbarConfig } from './config';

@Injectable()
export class RollbarErrorHandler extends DefaultErrorHandler {
  private rollbar: Rollbar;

  createRollbar(): Rollbar {
    return new Rollbar(getRollbarConfig());
  }

  handleError(err: any): void {
    try {
      if (!this.rollbar) {
        this.rollbar = this.createRollbar();
      }
      if (this.isConfigurationValid()) {
        this.rollbar.error(err.originalError || err);
      } else {
        super.handleError(err);
      }
    } catch {
      // rollbar cannot be initialized
      console.error(err);
    }
  }

  isConfigurationValid(): boolean {
    return !!getRollbarConfig().accessToken;
  }
}

export function rollbarFactory(): Rollbar {
  return new Rollbar(getRollbarConfig());
}
