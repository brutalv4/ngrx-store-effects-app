import { Action } from '@ngrx/store';

import { Topping } from '@products/models';

// load toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALIZE_TOPPINGS = '[Products] Visualize Toppings';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(readonly payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(readonly payload: Topping[]) {}
}

export class VisualizeToppings implements Action {
  readonly type = VISUALIZE_TOPPINGS;
  constructor(readonly payload: number[]) {}
}

// action types
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess
  | VisualizeToppings;
