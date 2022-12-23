import { Action, MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import * as fromStore from '@products/store';

export abstract class CheckStoreGuard {
  constructor(protected store: Store<fromStore.ProductsState>) {}

  checkStore(
    getLoaded: MemoizedSelector<object, boolean>,
    load: Action
  ): Observable<boolean> {
    return this.store.select(getLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(load);
        }
      }),
      filter((loaded) => !!loaded),
      take(1)
    );
  }
}
