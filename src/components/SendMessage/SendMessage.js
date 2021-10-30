import "./SendMessage.css";
import { useRef } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const SendMessage = () => {
  const db = getFirestore();
  const auth = getAuth();
  const messageInput = useRef();

  const sendMessage = async (value) => {
    if (messageInput.current.value) {
      try {
        await addDoc(collection(db, "users"), {
          name: auth.currentUser.displayName,
          message: value,
        });

        messageInput.current.value = "";
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div className="input">
      <input
        className="send-message"
        id="send-message"
        placeholder="Send Message..."
        ref={messageInput}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#29ab87"
        class="bi bi-arrow-up-circle"
        viewBox="0 0 16 16"
        onClick={() =>
          sendMessage(document.getElementById("send-message").value)
        }
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        />
      </svg>
    </div>
  );
};

export default SendMessage;
