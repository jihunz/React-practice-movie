import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === "") {
        return;
      }
      setToDos((currentArray) => [toDo, ...currentArray]);
      setToDo("");
      console.log(toDos);
  }
  return (
    <div className="App">
      <h3>My To Dos: {toDos.length}</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo} type="text"
          placeholder="what todo">
        </input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
