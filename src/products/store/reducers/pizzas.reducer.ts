import { Entities, Pizza } from '@products/models';
import { reduceItemsToEntities } from '@utils';

import * as fromPizzasAction from '../actions/pizzas.action';

export interface PizzaState {
  entities: Entities<Pizza>;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizzasAction.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzasAction.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzasAction.LOAD_PIZZAS_SUCCESS: {
      const pizzas: Pizza[] = action.payload;
      const entities = reduceItemsToEntities(pizzas, { ...state.entities });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromPizzasAction.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzasAction.UPDATE_PIZZA_SUCCESS:
    case fromPizzasAction.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities,
      };
    }

    default:
      return state;
  }
}

// selectors
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;
