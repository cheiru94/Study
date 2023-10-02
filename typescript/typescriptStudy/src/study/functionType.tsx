/* 🟢 함수형 정의 */

const Example = () => {

  // typescript 에서는 인수에도 type을 지정해 주어야 한다.  
  function sum1(x: number, y?: number) {  // 🚩y?: number  or   🚩y: number = 1
    // function sum1(x: number, y: number=1) 
    console.log(y);  // ?를 붙이면 undefined가 설정된다
    // return x + y;
  }

  // typescript 에서는 인수 개수도 맞춰야 한다. 아니면 에러 발생
  const result1 = sum1(1); // 인수 개수를 맞춰야 하지만, 1.y에 ?를 붙이거나   2.default값을 주면 에러 안남
  console.log(result1);

};

export default Example;

