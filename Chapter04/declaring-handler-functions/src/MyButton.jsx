function MyButton(props) {
  const clickHandler = () => {
    console.log("clicked");
  };

  return <button onClick={clickHandler}>{props.children}</button>;
}

export default MyButton;
