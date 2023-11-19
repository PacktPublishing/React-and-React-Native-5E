import { useState } from "react";
import { Button, View } from "react-native";
import { TodoItem, Todo } from "./TodoItem";
import { styles } from "./styles";

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTask = () => {
    setTodoList([
      ...todoList,
      { id: String(new Date().getTime()), title: "New task" },
    ]);
  };

  const deleteTask = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {todoList.map(({ id, title }) => (
          <TodoItem key={id} id={id} title={title} onPress={deleteTask} />
        ))}
      </View>
      <Button onPress={addTask} title="Add" />
    </View>
  );
}
