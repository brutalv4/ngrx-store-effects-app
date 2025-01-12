import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Pizza } from '@products/models';
import { Observable } from 'rxjs';

import * as fromProductsStore from '@products/store';

@Component({
  selector: 'products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <ng-container *ngIf="pizzas$ | async as pizzas">
          <div *ngIf="!pizzas?.length">No pizzas, add one to get started.</div>
          <pizza-item *ngFor="let pizza of pizzas" [pizza]="pizza">
          </pizza-item>
        </ng-container>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Entities<Pizza>>;

  constructor(private store: Store<fromProductsStore.ProductsState>) {}

  ngOnInit(): void {
    this.pizzas$ = this.store.select(fromProductsStore.getAllPizzas);
  }
}
