const items = new Array(100).fill(null).map((v, i) => `Item ${i}`);

function filterAndSort(data: string[], text: string, asc: boolean) {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

export function fetchItems(
  filter: string,
  asc: boolean
): Promise<{ json: () => Promise<{ items: string[] }> }> {
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc),
        }),
    });
  });
}
