import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import * as fromStore from '@products/store';

export abstract class CheckStoreGuard {
  constructor(protected store: Store<fromStore.ProductsState>) {}

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAllPizzasLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      filter((loaded) => !!loaded),
      take(1)
    );
  }
}
