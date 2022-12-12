import { Entities, Item } from '@products/models';

export function reduceItemsToEntities<T extends Item>(
  items: T[],
  seed: Entities<T>
): Entities<T> {
  return items.reduce(
    (entities: Entities<T>, item: T) => ({
      ...entities,
      [item.id]: item,
    }),
    seed
  );
}
