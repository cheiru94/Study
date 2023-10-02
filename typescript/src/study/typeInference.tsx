/* 🟢 타입 추론 (type inference) */

// TypeScript에서는 타입 추론(type inference)을 통해 타입을 어느 정도 추정해 주는 기능이 있다.
// 기본적으로 타입을 알 수 있는 경우의 타입 정의는 타입 추론에 맡기도록 한다.

const Example = () => {

  let str = "ヤッホ"; // type정보가 명확한 경우에 type을 지정해 주지 않아도 알아서  type을 지정해 준다.
  str = "안녕"
  // str = 2951; 에러 발생

  let obj = { name: 'ichiban', age: 28 };
  obj = { name: 'ichiban', age: 30 };

  // 🚩 const로 정의한 변수에 대해서는 리터럴 타입이 된다.
  const ichiban = 'ichiban';
  // ichiban ="재일";     에러 뜸
  const num = 123;
  // num = 33;       에러 뜸

  console.log([str, obj, ichiban, num]);
};

export default Example;