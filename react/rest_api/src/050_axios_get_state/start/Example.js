import axios from "axios";
import { useEffect, useState } from "react";

const Example = () => {
  // 초기 값을 설정해 놓지 않으면 undefind가 된다
  const [users, setUsers] = useState(); // 배열로 초기 값을 설정하지 않으면 map 메서드를 사용할 수 없다

  useEffect(() => {
    console.log("useEffect 호출됨");
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      setUsers(res.data);
    };

    getUser();
  }, []); // 초기 렌더링에 딱 1번 호출.
  return (
    <>
      {users?.map((user) => {
        //users라는 객체가 null이거나 undefined인 경우 에러를 발생시키는 대신에 undefined를 반환
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age:{user.age} </p>
            <p>hobbies:{user.hobbies.join(",")} </p>
            {/* 배열이 이어질 떄 ,으로 구별한다 */}
          </div>
        );
      })}
    </>
  );
};

export default Example;
