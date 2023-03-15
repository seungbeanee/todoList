import { useRef, useState } from 'react';
import './App.css';
import TodoList from './TodoLIst';

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      content,
      id:dataId.current,
    }
    dataId.current += 1;
    setData([...data, newTodo]);
  };

  const onDelete = (targetId) => {
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  }

  return (
    <div className="App">
      <header>
          <div className="head_text">{"TodoList"}</div>
      </header>
      <TodoList todoList={data} onCreate={onCreate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
