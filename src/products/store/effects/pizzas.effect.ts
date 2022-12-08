import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromProductsServices from '@products/services';
import * as fromProductsStore from '@products/store';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzasService: fromProductsServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(fromProductsStore.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map((pizzas) => new fromProductsStore.LoadPizzasSuccess(pizzas)),
        catchError((error) => of(new fromProductsStore.LoadPizzasFail(error)))
      );
    })
  );
}
