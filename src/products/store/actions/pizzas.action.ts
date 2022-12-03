import { Action } from '@ngrx/store';

import { Pizza } from 'models';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;

  constructor(readonly payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;

  constructor(readonly payload: Pizza[]) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
