/* 🟢 type Alias*/

// 타입스크립트에서는 type 문장을 사용하여 타입에 별칭을 붙일 수 있다. 이를 타입 별칭(type alias)이라고 한다.


const Example = () => {

  // 객체 형태로 정의 
  type User = {  // type문을 사용한다는 것은 type 정의를 조합한 것에 대해 이름을 붙이는 것 
    name: string,  // type문을 사용해 타입을 정의할 때는 pascal case(선두가 대문자)를 사용한다
    age: number
  }
  const user: User = { name: 'ichiban', age: 28 }


  // 단독으로 정의 
  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";


  // 위에서 정의한 type을 사용하기
  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }


  // 정의한 type을 객체 형태로
  const userProfile: UserProfile = {
    name: 'aya',
    age: 30,
    gender: "woman"
  }


  console.log([user, userProfile])

};

export default Example;
