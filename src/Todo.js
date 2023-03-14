import { useState } from "react";
import MyButton from "./components/MyButton";
import TodoList from "./TodoLIst";

const Todo = ({ todoList, onCreate, onDelete }) => {
    const [curDate, setCurDate] = useState(new Date());

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
    return (
        <div>
            <header>
                <div className="head_btn_left">
                    <MyButton text={"<"} onClick={decreaseDay} type={"positive"}/>
                </div>
                <div className="head_text">{headText}</div>
                <div className="head_btn_right">
                    <MyButton text={">"} onClick={increaseDay} type={"positive"}/>
                </div>
            </header>
            <TodoList todoList={todoList} curDate={curDate} onCreate={onCreate} onDelete={onDelete}/>
        </div>
    )
}

export default Todo;