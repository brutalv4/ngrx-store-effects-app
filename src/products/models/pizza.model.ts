import { Item } from './item.model';
import { Topping } from './topping.model';

export interface Pizza extends Item {
  name?: string;
  toppings?: Topping[];
}
