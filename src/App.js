import { useRef, useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0)

  const onCreate = (date, content) => {
    const newTodo = {
      date,
      content,
      dataId,
    }
    dataId.current += 1;
    setData([...data, newTodo])
  }

  const onDelete = (targetId) => {
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  }

  return (
    <div className="App">
      <Todo todoList={data} onCreate={onCreate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
