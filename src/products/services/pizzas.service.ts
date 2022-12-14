import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Pizza } from '@products/models';
import { CatchAndRethrow } from '@utils';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  @CatchAndRethrow()
  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`/api/pizzas`);
  }

  @CatchAndRethrow()
  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, payload);
  }

  @CatchAndRethrow()
  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${payload.id}`, payload);
  }

  @CatchAndRethrow()
  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http.delete<any>(`/api/pizzas/${payload.id}`);
  }
}
