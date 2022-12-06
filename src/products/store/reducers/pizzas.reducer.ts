import { Entities, Pizza } from 'models';

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

      const entities: Entities<Pizza> = pizzas.reduce(
        (entities: Entities<Pizza>, pizza: Pizza) => ({
          ...entities,
          [pizza.id]: pizza,
        }),
        {
          ...state.entities,
        }
      );

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

    default:
      return state;
  }
}

// selectors
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
