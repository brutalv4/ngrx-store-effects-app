import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

type RouterState = fromRouter.RouterReducerState<RouterStateUrl>;

interface State {
  routerReducer: RouterState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState =
  createFeatureSelector<RouterState>('routerReducer');
