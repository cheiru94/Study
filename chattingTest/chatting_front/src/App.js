import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";
function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setmessageList] = useState([]);
  console.log("messageList: ", messageList);

  useEffect(() => {
    // 🟣
    socket.on("message", (message) => {
      // 서버에서 부른걸 들음
      console.log("message: ", message);
      setmessageList((prev) => prev.concat(message));
    });
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("자네의 이름이 무엇인가?");

    //! 🟠 login
    socket.emit("login", userName, (res) => {
      console.log("🟠login: res:", res);

      if (res?.status) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    //! message
    socket.emit("sendMessage", message, (res) => {
      console.log("🟡sendMessage res:", res);
    });
    setMessage("");
  };

  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user} />
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
