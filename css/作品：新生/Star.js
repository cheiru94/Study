export default class Star {
  constructor(number) {
    // 새로운 div 엘리먼트 생성
    this.element = document.createElement("div");

    // div 엘리먼트에 "star" 클래스 추가
    this.element.classList.add("star");

    // 각 별의 내부 텍스트로 number 값을 표시할 수 있음
    // this.element.innerHTML = number;

    // 별을 body에 추가
    document.body.append(this.element);
  }
}
