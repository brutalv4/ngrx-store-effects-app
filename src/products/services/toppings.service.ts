import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Topping } from 'models';
import { CatchAndThrowError } from 'utils';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  @CatchAndThrowError()
  getToppings(): Observable<Topping[]> {
    return this.http.get<Topping[]>(`/api/toppings`);
  }
}
