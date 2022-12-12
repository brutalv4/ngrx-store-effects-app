import { Item } from './item.model';

export interface Topping extends Item {
  name?: string;
  [key: string]: any;
}
