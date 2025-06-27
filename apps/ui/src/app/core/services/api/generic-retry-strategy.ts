import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const genericRetryStrategy =
  ({
    maxRetryAttempts = 8,
    scalingDuration = 1000,
    excludedStatusCodes = [401],
  }: {
    maxRetryAttempts?: number;
    scalingDuration?: number;
    excludedStatusCodes?: number[];
  } = {}) =>
  (attempts: Observable<any>) => {
    // function returns the Fibonacci number
    const fib = (n) => {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    };
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = fib(i + 1);
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => {
            return e === error.status;
          })
        ) {
          return throwError(error);
        }
        return timer(retryAttempt * scalingDuration);
      }),
    );
  };
