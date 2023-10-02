/* 🟢 이벤트의 type */

const Example = () => {
  //clickHandler 함수가 정의되는 시점에서 그 함수가 어떤 종류의 이벤트를 처리할지 알 수 없기 때문에, TypeScript는 event 매개변수의 타입을 추론할 수 없다.
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("MouseEvent", event); // 꼭 타입 지정해야 함
  // const clickHandler = (event: any) => console.log("MouseEvent", event); //  any는 왠만하면 쓰지 말라고 권장한다.
  return (
    <>
      <h1>Eventの型定義</h1>
      <h3>onClickにおけるeventオブジェクトの型: React.MouseEvent{"<T>"}</h3>

      <button onClick={clickHandler}>
        buttonタグ
      </button>
      <div onClick={(event) => console.log("MouseEvent", event)}>divタグ</div>  {/* 이 경우 TypeScript의 타입 추론(type inference)기능으로 변수의 타입을 자동으로 추론한다 */}
      <br />

      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => /* 명시적으로 type을 지정한 경우 */
          console.log("MouseEvent", event)
        }
      >
        ボタン
      </button>

      <h3>onChangeにおけるeventオブジェクトの型: React.ChangeEvent{"<T>"}</h3>

      <input
        type="text" onChange={(event) => console.log("ChangeEvent", event)}   {/* 이 경우 TypeScript의 타입 추론(type inference)기능으로 변수의 타입을 자동으로 추론한다 */}
      />
      <br />

      <select onChange={(event) => console.log("ChangeEvent", event)}>   {/* 이 경우 TypeScript의 타입 추론(type inference)기능으로 변수의 타입을 자동으로 추론한다 */}
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="banana">banana</option>
      </select>
      <br />

      <h3>onSubmitにおけるeventオブジェクトの型: React.FormEvent{"<T>"}</h3>
      <form
        onSubmit={(event) => {
          {/* 이 경우 TypeScript의 타입 추론(type inference)기능으로 변수의 타입을 자동으로 추론한다 */ }
          event.preventDefault();
          console.log("FormEvent", event);
        }}
      >
        <button type="submit">送信</button>
      </form>
      <br />
    </>
  );
};

export default Example;
