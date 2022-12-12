import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizza from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface ProductsState {
  pizzas: fromPizza.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer,
  toppings: fromToppings.reducer,
};

export const getProductsState =
  createFeatureSelector<ProductsState>('products');
