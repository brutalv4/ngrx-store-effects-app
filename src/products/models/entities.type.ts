import { Item } from './item.model';

export type Entities<T extends Item> = { [id: number]: T };
