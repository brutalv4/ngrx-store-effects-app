import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromServices from 'services';
import * as fromStore from 'store';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzasService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(fromStore.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map((pizzas) => new fromStore.LoadPizzasSuccess(pizzas)),
        catchError((error) => of(new fromStore.LoadPizzasFail(error)))
      );
    })
  );
}
