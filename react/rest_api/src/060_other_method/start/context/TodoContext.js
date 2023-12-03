import { createContext, useContext, useEffect, useReducer } from "react";
import todoApi from "../api/todo";
const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/init":
      return [...action.todos]; // 현재 상태와 액션을 받아 새로운 상태를 반환
    /* 
      [
        {
            "id": "c5868bfe-fa1d-4891-acd3-bc43959a9bb7",
            "content": "洗濯",
            "editing": false
        },
        {
            "id": "5d87d115-7ebb-4d17-adce-4ffe4b39f8c5",
            "content": "掃除",
            "editing": false
        },
        {
            "id": "f2c38014-e2df-40ae-ac93-36303b8771ce",
            "content": "買い物しましょう！",
            "editing": false,
            "completed": false
        }
      ] 
    */

    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []); // todosList 초기 값

  useEffect(() => {
    todoApi.getAll().then((todos) => {
      dispatch({ type: "todo/init", todos }); // todos : todos
    });
  }, []);
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
