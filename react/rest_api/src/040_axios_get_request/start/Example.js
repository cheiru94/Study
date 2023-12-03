// axios로 리퀘스트 송신

import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      console.log(res.data);
    };

    getUser();
  });
  return <></>;
};

export default Example;
