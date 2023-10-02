/* 🟢 Primitive */
// Primitive란、TypeScript가 상요할 수 있는 기본적인 값
// ex) string、number、bigint、boolean、null、undefined 등이 있다.

const Example = () => {
  let str: string = 'Hello';
  str = 'Bye';
  // str = 123;   에러 발생
  console.log(str);

  const num1: number = 102;
  // num1 = "123";   에러 발생
  console.log(num1);

  const num2 = 102;
  // num2 = "123"; 에러 발생  => 초기 값을 설정해놓으면 그 값대로 형이 고정된다.
  console.log(num2);

  const bignum: bigint = 103n;
  console.log(bignum);

  const bool: boolean = true;
  console.log(bool);

  const nullish: null = null;
  console.log(nullish);

  const undefinedValue: undefined = undefined;
  console.log(undefinedValue);



  /* 🟢 리터럴型 : 리터럴에 의해서 형의 정보를 정의한는 것 */
  const trueVal: true = true as const;  // true만 넣을 수 있다.
  // trueVal = false;  =>  에러
  console.log(trueVal);

  const num123: 123 = 123 as const;     // 123만 넣을 수 있다.
  console.log(num123);

  const strHello: 'Hello' = 'Hello' as const;  // 'Hello'만 넣을 수 있다. 'hello' (❌)
  console.log(strHello);



  /* 🟢 any형(뭐든 저장 가능) */
  const anyValue: string[] = [];
  console.log(anyValue);
};


export default Example;
