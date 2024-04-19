import React from "react";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import "./InputField.css";
const InputField = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="input-area">
      <div className="plus-button">+</div>
      <form onSubmit={sendMessage} className="input-container">
        {/* 인풋 창 */}
        <Input
          placeholder="메세지를 입력하세요..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          multiline={false}
          rows={1}
        />

        {/* 버튼 */}
        <Button disabled={message === ""} type="submit" className="send-button">
          전송
        </Button>
      </form>
    </div>
  );
};

export default InputField;
