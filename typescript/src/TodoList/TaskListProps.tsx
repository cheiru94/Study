
import { Todo } from "./TodoList";

type TaskListProps = {
  todos: Todo[]; // 불러온 Todo type을 적용
}

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <>
      {
        <ul>
          {
            todos.map((todo) => {
              return <li key={todo.text}>{todo.text}</li>;
            })}
        </ul>
      }
    </>
  )
}

export default TaskList