import { useRef, useState } from "react";
import MyButton from "./components/MyButton";
import TodoItem from "./TodoItem";

const TodoList = ({todoList, onCreate, onDelete}) => {

    const [content, setContent] = useState("");
    const inputContent = useRef();

    const handleChangeState = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = () => {
        if(content.length < 1) {
            inputContent.current.focus();
            return;
        }
        onCreate(content);

        setContent("");
    }

    return (
        <div>
            <div className="TodoListMenu">
                <input
                    ref={inputContent}
                    value={content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="할 일을 입력하세요."
                    type="text"
                />
                <MyButton text={"+"} type={"positive"} onClick={handleSubmit}/>    
            </div>
            {todoList.map((it)=>(
                <TodoItem key={it.id}{...it} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default TodoList;