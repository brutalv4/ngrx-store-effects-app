import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap } from 'rxjs/operators';
import { CheckStoreGuard } from './store.guard';

import * as fromStore from '@products/store';

@Injectable()
export class PizzasGuard extends CheckStoreGuard implements CanActivate {
  constructor(protected store: Store<fromStore.ProductsState>) {
    super(store);
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
