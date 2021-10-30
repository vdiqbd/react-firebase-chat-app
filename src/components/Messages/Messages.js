import "./Messages.css";
import Message from "../Message/Message";
import { useState, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const Messages = () => {
  const db = getFirestore();
  const messageDiv = useRef();
  const auth = getAuth();
  const [chats, setChats] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        collection(db, "users"),
        (snapshot) => {
          setChats(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
          messageDiv.current.style.scrollBehavior = "smooth";
        },
        (error) => {
          console.error(error);
        }
      ),
    []
  );

  return (
    <div className="message" id="message-div" ref={messageDiv}>
      {chats.map((chat) => {
        return (
          <Message
            id={chat.name === auth.currentUser.displayName ? "right" : "left"}
            name={chat.name}
            message={chat.message}
            key={chat.id}
          />
        );
      })}
    </div>
  );
};

export default Messages;
