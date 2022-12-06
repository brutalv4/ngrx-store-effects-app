import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { Entities, Pizza } from 'models';
import * as fromPizzaReducer from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzaReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzaReducer.reducer,
};

const getProductsState = createFeatureSelector<ProductsState>('products');

// pizzas state
const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzasEntities = createSelector(
  getPizzaState,
  fromPizzaReducer.getPizzasEntities
);
export const getAllPizzas = createSelector(
  getAllPizzasEntities,
  (entities: Entities<Pizza>) =>
    Object.keys(entities).map((id) => entities[parseInt(id)])
);
export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzaReducer.getPizzasLoaded
);
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzaReducer.getPizzasLoading
);
