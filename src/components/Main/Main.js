import "./Main.css";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import SendMessage from "../SendMessage/SendMessage";

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-div">
        <Header change={props.change} />
        <Messages />
        <SendMessage />
      </div>
    </div>
  );
};

export default Main;
