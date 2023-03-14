import { useEffect, useRef, useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import TodoList from './TodoLIst';
import { getStringDate } from './util/date';

function App() {

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const dataId = useRef(0);
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월 ${curDate.getDate()}일`

  const increaseDay = () => {
    setCurDate(
        new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            curDate.getDate() + 1
        )
    );
}

const decreaseDay = () => {
    setCurDate(
        new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            curDate.getDate() - 1
        )
    );
}

  const onCreate = (date, content) => {
    const newTodo = {
      date,
      content,
      id : date+dataId.current,
    }
    dataId.current += 1;
    setData([...data, newTodo]);
  };

  const onDelete = (targetId) => {
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  }

  useEffect(()=>{
    const curCurrentDay = getStringDate(curDate);

    setData(
      data.filter((it) => curCurrentDay === it.date)
    )
  },[])

  return (
    <div className="App">
      <header>
          <div className="head_btn_left">
              <MyButton text={"<"} onClick={decreaseDay} type={"positive"}/>
          </div>
          <div className="head_text">{headText}</div>
          <div className="head_btn_right">
              <MyButton text={">"} onClick={increaseDay} type={"positive"}/>
          </div>
      </header>
      <TodoList todoList={data} curDate={curDate} onCreate={onCreate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
