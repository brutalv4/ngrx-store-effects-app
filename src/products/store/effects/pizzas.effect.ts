import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromServices from '@products/services';
import * as pizzasActions from '../actions/pizzas.action';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzasService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzasActions.LOAD_PIZZAS).pipe(
    switchMap(() =>
      this.pizzasService.getPizzas().pipe(
        map((pizzas) => new pizzasActions.LoadPizzasSuccess(pizzas)),
        catchError((error) => of(new pizzasActions.LoadPizzasFail(error)))
      )
    )
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzasActions.CREATE_PIZZA).pipe(
    map((action: pizzasActions.CreatePizza) => action.payload),
    switchMap((pizza) =>
      this.pizzasService.createPizza(pizza).pipe(
        map((pizza) => new pizzasActions.CreatePizzaSuccess(pizza)),
        catchError((error) => of(new pizzasActions.CreatePizzaFail(error)))
      )
    )
  );
}
