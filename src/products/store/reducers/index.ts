import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzaReducer from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzaReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzaReducer.reducer,
};
