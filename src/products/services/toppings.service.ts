import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Topping } from '@products/models';
import { CatchAndRethrow } from '@utils';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  @CatchAndRethrow()
  getToppings(): Observable<Topping[]> {
    return this.http.get<Topping[]>(`/api/toppings`);
  }
}
