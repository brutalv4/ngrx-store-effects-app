import { createSelector } from '@ngrx/store';
import { Entities, Pizza } from '@products/models';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

export const getAllPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getAllPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza =>
    router.state && entities[parseInt(router.state.params.pizzaId)]
);

export const getAllPizzas = createSelector(
  getAllPizzasEntities,
  (entities: Entities<Pizza>) =>
    Object.keys(entities).map((id) => entities[parseInt(id)])
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
