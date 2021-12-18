import { TodoInput } from "./TodoInput";
import TodoList from "./TodoList";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
const Todo = () => {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
  };
  return (
    <>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </>
  );
};
export default Todo;
