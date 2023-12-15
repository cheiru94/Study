import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <form>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      {/* register your input into the hook by invoking the "register" function */}
      <label>Email</label>
      <input
        name="email"
        type="email"
        // {...register("example")}
      />

      <label>Name</label>
      <input
        name="name"
        type="email"
        defaultValue="test"
        // {...register("example")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label>exampleRequired</label>
      <input
      // {...register("exampleRequired", { required: true })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}

      <input type="submit" />
    </form>
  );
}

export default App;
