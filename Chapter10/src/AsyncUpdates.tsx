import * as React from "react";

let unfilteredItems = new Array(25000)
  .fill(null)
  .map((_, i) => ({ id: i, name: `Item ${i}` }));

function filterItems(filter: string): Promise<{ id: number; name: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(unfilteredItems.filter((item) => item.name.includes(filter)));
    }, 1000);
  });
}

export default function AsyncUpdates() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [items, setItems] = React.useState<{ id: number; name: string }[]>([]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setFilter(e.target.value);
    setIsLoading(true);

    React.startTransition(() => {
      if (e.target.value === "") {
        setItems([]);
        setIsLoading(false);
      } else {
        filterItems(e.target.value).then((result) => {
          setItems(result);
          setIsLoading(false);
        });
      }
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={onChange}
        />
      </div>
      <div>
        {isLoading && <em>loading...</em>}
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
