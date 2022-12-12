import { Entities, Topping } from '@products/models';
import { reduceItemsToEntities } from '@utils';

import * as fromToppings from '../actions/toppings.action';

export interface ToppingsState {
  entities: Entities<Topping>;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingsState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = reduceItemsToEntities(toppings, { ...state.entities });

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
}

// selectors
export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
