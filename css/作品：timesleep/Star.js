export default class Star {
  constructor(number) {
    // 새로운 div 엘리먼트 생성
    this.element = document.createElement("div");

    // div 엘리먼트에 "star" 클래스 추가
    this.element.classList.add("star");

    // 각 별의 내부 텍스트로 00:00 형식의 랜덤 초 값을 표시
    this.element.innerHTML = this.getRandomTimeFormat();

    // 별을 body에 추가
    document.body.append(this.element);
  }

  getRandomTimeFormat() {
    // 0부터 59까지의 랜덤한 초 값
    const seconds = Math.floor(Math.random() * 60);

    // 초를 2자리 숫자로 표현
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // "00:00" 형식으로 반환
    return `00:${formattedSeconds}`;
  }
}
