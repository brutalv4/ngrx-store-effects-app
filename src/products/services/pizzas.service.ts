import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Pizza } from 'models';
import { CatchAndThrowError } from 'utils';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  @CatchAndThrowError()
  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`/api/pizzas`);
  }

  @CatchAndThrowError()
  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, payload);
  }

  @CatchAndThrowError()
  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${payload.id}`, payload);
  }

  @CatchAndThrowError()
  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http.delete<any>(`/api/pizzas/${payload.id}`);
  }
}
