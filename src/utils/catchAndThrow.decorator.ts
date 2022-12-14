import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function CatchAndRethrow() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method: Function = descriptor.value;

    descriptor.value = function (...args: any[]) {
      return method
        .apply(this, args)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    };
  };
}
