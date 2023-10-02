/* 🟢 객체 ( 배열, 객체 ) */   // *자바스크립트에서는 배열도 객체

const Example = () => {

  // 1. 배열 : 배열에 들어오는 값을 어떤 type인지 정의
  const arry1: number[] = [1, 2, 3];
  const arry2: Array<number> = [1, 2, 3]; // 제네릭 형태로 이렇게 표현할 수 있다

  const arry3: string[] = ['Southern All Stars', 'サザンオールスターズ'];

  const arry4: (string | number)[] = [1, '涙のキスキス']; // 유니온 type을 사용하기
  const arry5: Array<string | number> = [1, '涙のキスキス']; // 제네릭 형태로 유니온 표현

  console.log([arry1, arry2, arry3, arry4, arry5]);

  // 2. 객체 
  // 기본형
  const obj1: { name: string, age: number } = { name: 'ichiban', age: 28 };
  // obj1.name=28; 에러 발생
  console.log(obj1);

  //type 사용 
  type Person = { name: string, age?: number } // ?를 붙이면 해당 프로퍼티가 있어도 없어도 그만이란 뜻
  const obj2: Person = { name: 'ichiban', age: 28 };
  // const obj2: Person = { name: 'ichiban' };  age에 age? 이렇게 ? 가 없으면 에러뜸
  // obj2.sexyIchiban;  TS는 존재하지 않는 프로퍼티에 접근하면 에러 뜸 // 자바스크립트는 undefind 뜸
  console.log(obj2);


  // 3. 객체를 품은 배열
  const users: Person[] =  // const users: { name: string, age?: number }[] 와 같음
    [
      { name: 'ichiban' },
      { name: 'satomi', age: 30 },
      { name: 'aya', age: 30 },
      //{ age: 30 } 에러
    ]
  console.log(users);

};

export default Example;
