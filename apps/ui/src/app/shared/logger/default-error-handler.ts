import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class DefaultErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    console.error(err.originalError || err);
  }
}
