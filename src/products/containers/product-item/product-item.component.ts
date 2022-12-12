import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pizza, Topping } from '@products/models';

import * as fromStore from '@products/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)"
      >
        <pizza-display [pizza]="visualise"> </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza> = this.store.select(fromStore.getSelectedPizza);
  toppings: Topping[];
  visualise: Pizza;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadToppings());
  }

  onSelect(event: number[]) {
    throw new Error('Not yet implemented');
  }

  onCreate(event: Pizza) {
    throw new Error('Not yet implemented');
  }

  onUpdate(event: Pizza) {
    throw new Error('Not yet implemented');
  }

  onRemove(event: Pizza) {
    throw new Error('Not yet implemented');
  }
}
