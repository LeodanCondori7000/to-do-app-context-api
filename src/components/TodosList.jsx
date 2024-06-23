import TodoItem from "@/components/TodoItem";
// import { useTodosContext } from '@/context/TodosContext'; // new

// const TodosList = () => { // new
const TodosList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
  // const value = useTodosContext(); // new
  // console.log(value);
  // const { todos } = useTodosContext(); // new
  
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
      {/* context api new */}
      {/* {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))} */}
    </ul>
  );
};

export default TodosList;

// import TodoItem from "@/components/TodoItem";
// import { useContext } from 'react';
// import { TodosContext } from '@/context/TodosContext';


// const TodosList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
//   const value = useContext(TodosContext);
//   console.log(value);

//   return (
//     <ul>
//       {todosProps.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           itemProp={todo}
//           setTodos={setTodos}
//           delTodo={delTodo}
//           setUpdate={setUpdate}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TodosList;
