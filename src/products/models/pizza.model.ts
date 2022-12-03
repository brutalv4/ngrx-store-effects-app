import { Topping } from 'models';

export interface Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];
}
