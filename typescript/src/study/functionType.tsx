/* 🟢 함수형 정의 (인수) */

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




/* 🟢 함수형 정의 (반환 값) */
const Example2 = () => {

  // typescript 에서는 반환 값이 타입 추론 된다. 
  const sum1 = (x: number, y: number) => x + y; console.log(sum1);
  // 명시적으로 반환 값의 자료형을 정의할 수도 있다
  const sum2 = (x: number, y: number): number => x + y;
  // const sum2 = (x: number, y: number): number => "error"; 정의 했는데 다른 형을 결과 값으로 내면 에러 / string으로 지정하면 된다
  const result2 = sum2(10, 20);
  console.log(result2);


  //함수의 반환값이 존재하지 않는 경우 void라고 자료형 적는 자리에 적어준다.
  function sum(x: number, y: number): void {
    console.log(y);
  }
  console.log(sum(1, 2));


  // type을 사용해 함수 자체에 type을 지정할 수 있다.
  type Sum = (x: number, y: number) => number; // 형을 정의한 것이지, 함수 자체는 아니다. 
  const sum3: Sum = (x, y) => x + y;
  // const sum3: (x: number, y: number) = (x, y) => x + y; 와 같은 결과

  const result3 = sum3(1, 2);
  console.log(result3);
}

export { Example, Example2 };

