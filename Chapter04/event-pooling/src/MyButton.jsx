function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function MyButton(props) {
  function onClick(e) {
    console.log("clicked", e.currentTarget.style);

    fetchData().then(() => {
      console.log("callback", e.currentTarget.style);
    });
  }

  return <button onClick={onClick}>{props.children}</button>;
}

export default MyButton;
