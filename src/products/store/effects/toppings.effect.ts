import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromServices from '@products/services';
import * as toppingsActions from '../actions/toppings.action';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map((toppings) => new toppingsActions.LoadToppingsSuccess(toppings)),
        catchError((error) => of(new toppingsActions.LoadToppingsFail(error)))
      );
    })
  );
}
