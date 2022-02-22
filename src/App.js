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
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;