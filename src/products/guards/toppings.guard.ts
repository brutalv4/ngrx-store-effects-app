import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap } from 'rxjs/operators';
import { CheckStoreGuard } from './check-store.guard';

import * as fromStore from '@products/store';

@Injectable()
export class ToppingsGuard extends CheckStoreGuard implements CanActivate {
  constructor(protected store: Store<fromStore.ProductsState>) {
    super(store);
  }

  canActivate(): Observable<boolean> {
    return this.checkStore(
      fromStore.getAllToppingsLoaded,
      new fromStore.LoadToppings()
    ).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
