/* 🟢 유니온 타입(union type) */

// 여러 타입을 조합하여 'T형 또는 U형'과 같은 '또는'의 의미를 나타낼 수 있다.
// T | U와 같이 |를 사용하여 유니온 타입을 나타낸다
//  | 는 "파이프"라고 한다  or과 같은 의미.

const Example = () => {

  // or 조건 처럼 type을 둘 중 하나를 택하게 할 수 있음
  let strOrNum: string | number = "四六時中も好きと言って"
  strOrNum = 2951;
  // strOrNum = ture; 에러 
  console.log(strOrNum);

  // 🚩 2개 이상 지정 가능하다
  let strOrNumOrBool: string | number | boolean = '夢の中へ連れて行って';
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  const helloOrNumOrBool: '忘れられない' | number | boolean = true;
  console.log(helloOrNumOrBool);
  //  = '忘れられない' 이외의 문자열은 오류 


  // 🚩 type 키워드
  type HelloOrNum = 'Hello' | number; // type을 지정
  const hello: HelloOrNum = 'Hello';
  console.log(hello);
  // const hello:'Hello' | number = 'Hello';   이것과 같은 의미

  // 🚩 union type은 선두에 파이프 ( | ) 가 오면 무시
  type DayOfWeek =
    | 'Monday'  // 보기 편하게 하기 위해 이렇게 작성해 놓는 것도 하나의 방법
    | 'Tuesday'
  const day: DayOfWeek = 'Monday';
  console.log(day);
};

export default Example;


