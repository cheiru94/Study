/* 🟢 제네릭 ( generic ) */
// 타입 인수(타입 파라미터)를 받는 함수를 만드는 기능을 말한다.

const Example = () => {

  // string 타입을 return
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  // number 타입을 return
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  // 이렇게 하나하나 인수의 자료형에 따라 함수를 만들기에 넘 귀찮다.
  const strArry = repeatStr('ヤッホ', 3);
  const numArry = repeatNum(10, 3);
  console.log(strArry); // Output: [ 'ヤッホ', 'ヤッホ', 'ヤッホ' ]
  console.log(numArry); // Output: [10,10,10]


  // 🚩 제네릭 사용
  // repeat 를 실행시킬 때 T로 불리는 인수에 대해서 사용하고 싶은 type을 정의할 수 있다
  // <T>  : 타입 매개변수 (type parameters )
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  const numArry2 = repeat(10, 3);  // type 추론이 가능하다. ( type 생략 가능)
  const strArry2 = repeat<string>('ヤッホ', 3);
  const boolArry = repeat<boolean>(true, 3);
  const ichibanArry = repeat<"ichiban">("ichiban", 3); // 리터럴도 가능

  console.log(numArry2, strArry2, boolArry, ichibanArry);


};


export default Example;
