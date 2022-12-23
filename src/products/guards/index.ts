import { PizzaExistsGuard } from './pizza-exists.guard';
import { PizzasGuard } from './pizzas.guard';

export const guards: any[] = [PizzasGuard, PizzaExistsGuard];

export * from './pizza-exists.guard';
export * from './pizzas.guard';
