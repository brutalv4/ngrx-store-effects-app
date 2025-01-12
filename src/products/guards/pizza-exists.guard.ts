import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Entities, Pizza } from '@products/models';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { CheckStoreGuard } from './check-store.guard';

import * as fromStore from '@products/store';

@Injectable()
export class PizzaExistsGuard extends CheckStoreGuard implements CanActivate {
  constructor(protected store: Store<fromStore.ProductsState>) {
    super(store);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore(
      fromStore.getAllPizzasLoaded,
      new fromStore.LoadPizzas()
    ).pipe(switchMap(() => this.hasPizza(parseInt(route.params.pizzaId))));
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store.select(fromStore.getAllPizzasEntities).pipe(
      map((entities: Entities<Pizza>) => !!entities[id]),
      take(1)
    );
  }
}
