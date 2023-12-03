import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
  // get
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  // post : post 메서드는 새롭게 todo를 추가하기 떄문에 인자 값이 필요하다
  //받아온 값을 2번째 인자로 넣는다.
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },
  // delete : delete 메서드는 url 뒤에 id 값을 줘야한다.
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
    return result.data;
  },
  // patch : patch 메서드는 url 뒤에 id 값을 줘야한다.
  async patch(todo) {
    const result = await axios.patch(ENDPOINT_URL + "/" + todo.id, todo); //갱신할 내용울 2번째 인자로 넣는다.
    return result.data;
  },
};

// todoApi.getAll();
// todoApi.patch({
//   id: "f2c38014-e2df-40ae-ac93-36303b8771ce",
//   content: "買い物しましょう！",
//   editing: false,
//   completed: false,
// });

export default todoApi;
