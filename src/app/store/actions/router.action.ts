import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export const GO = '[ROUTER] Go';
export const BACK = '[ROUTER] Back';
export const FORWARD = '[ROUTER] GO';

export class Go implements Action {
  readonly type = GO;
  constructor(
    readonly payload: { path: any[]; query?: object; extras?: NavigationExtras }
  ) {}
}
export class Back implements Action {
  readonly type = BACK;
}
export class Forward implements Action {
  readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;
