import { io } from "socket.io-client";

//  웹소켓 연결을 설정
const socket = io("http://localhost:5001"); // io 함수를 호출하여 지정된 주소(http://localhost:5001)에 있는 서버와의 웹소켓 연결을 생성

export default socket;
//이 코드를 사용하면 다른 파일에서 이 소켓을 임포트하여 서버로부터 데이터를 받거나 서버에 데이터를 보내는 이벤트를 처리할 수 있습니다.
