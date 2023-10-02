
import type { Todo } from "./TodoList"; // type 정보만 필요할 경우 이렇게 type이라고 명시하면 된다

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