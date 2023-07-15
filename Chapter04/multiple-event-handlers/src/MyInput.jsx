function MyInput() {
  const onChange = () => {
    console.log("changed");
  };

  const onBlur = () => {
    console.log("blured");
  };

  return <input onChange={onChange} onBlur={onBlur} />;
}

export default MyInput;
