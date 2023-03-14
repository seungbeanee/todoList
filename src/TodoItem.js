import { useState } from "react";
import MyButton from "./components/MyButton";

const TodoItem = ({id, content, onDelete}) => {

    const [isCheck, setIsCheck] = useState(false);

    const changeHandler = (checked) => {
        if(checked){
            setIsCheck(true);
        } else {
            setIsCheck(false);
        }
    }

    return (
        <div className="TodoItem">
            <div className="TodoItemDiv">
                <div>
                    <input type="checkbox"
                        id={id}
                        onChange={(e)=>{changeHandler(e.currentTarget.id, e.currentTarget.checked)}}
                    />
                    <label className={isCheck ? "toggle" : ""}>
                        {content}
                    </label>
                </div>
                <MyButton type={"icon"} onClick={()=>{onDelete(id)}}/>
            </div>
        </div>
    )
}

export default TodoItem;