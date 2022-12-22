import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pizza, Topping } from '@products/models';

import * as fromStore from '@products/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)"
      >
        <pizza-display [pizza]="visualize$ | async"></pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualize$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((selectedPizza: Pizza) => {
        const selectedToppingsIds = !!selectedPizza
          ? selectedPizza.toppings.map(({ id }) => id)
          : [];

        this.store.dispatch(
          new fromStore.VisualizeToppings(selectedToppingsIds)
        );
      })
    );
    this.visualize$ = this.store.select(fromStore.getPizzaVisualized);
    this.toppings$ = this.store.select(fromStore.getAllToppings);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualizeToppings(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    this.store.dispatch(new fromStore.RemovePizza(event));
  }
}
