function MyButton(props) {
  return (
    <button onClick={(e) => console.log("clicked", e)}>{props.children}</button>
  );
}

export default MyButton;
