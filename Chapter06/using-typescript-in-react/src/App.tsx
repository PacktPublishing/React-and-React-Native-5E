import Greeting from "./Greeting";
import UserCard from "./UserCard";
import Button from "./Button";
import Counter from "./Counter";
import InputField from "./InputField";
import InputWithRef from "./InputWithRef";

function App() {
  return (
    <div>
      <Greeting name="Mike" />
      <UserCard user={{ name: "Mike", email: "mikes@email.com" }} />
      <Button>Click me!</Button>
      <Button disabled>Don't click me!</Button>
      <Counter />
      <InputField />
      <InputWithRef />
    </div>
  );
}

export default App;
