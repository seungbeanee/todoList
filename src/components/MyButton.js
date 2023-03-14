import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MyButton = ({ text, type, onClick }) => {

    const btnType = ["positive", "negative", "icon"].includes(type) ? type : "default";

    if(btnType === "icon") {
        return (
            <button className={["MyButton",`MyButton_${btnType}`].join(" ")} onClick={onClick}>
                <FontAwesomeIcon icon={faTrashCan} className="TrashColor"/>
            </button>
        )
    } else {
        return (
            <button className={["MyButton",`MyButton_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
        )
    }

    
}

MyButton.defaultProps = {
    type:"default",
}

export default MyButton;