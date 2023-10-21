function* genItems() {
  let cnt = 0;

  while (true) {
    yield `Item ${cnt++}`;
  }
}

let items = genItems();

export function fetchItems({ refresh }: { refresh?: boolean }) {
  if (refresh) {
    items = genItems();
  }

  return Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(30).fill(null).map(() => items.next().value as string),
      }),
  });
}
