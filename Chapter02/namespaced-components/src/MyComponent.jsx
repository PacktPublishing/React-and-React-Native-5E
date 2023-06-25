function First() {
  return <p>First...</p>;
}

function Second() {
  return <p>Second...</p>;
}

function MyComponent(props) {
  return <section>{props.children}</section>;
}

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;
export { First, Second };
