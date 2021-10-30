import "./Message.css";
import { getAuth } from "firebase/auth";

const Message = (props) => {
  const auth = getAuth();

  return (
    <div className="message-div" id={props.id}>
      {props.id === "left" ? <div className="one">{props.name}</div> : ""}
      <div className="two">{props.message}</div>
    </div>
  );
};

export default Message;
