import { createSelector } from '@ngrx/store';

import { Entities, Topping } from '@products/models';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getAllToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(
  getAllToppingsEntities,
  (entities: Entities<Topping>) =>
    Object.keys(entities).map((id) => entities[parseInt(id)])
);

export const getAllToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getAllToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
