// import Button from "./Button";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    // console.log(toDo);
    e.preventDefault();
    if (toDo === "") return;
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo("");
  };
  const onRemove = (index) => {
    // console.log("onRemove: index :", index);
    setToDos((toDos) => toDos.filter((toDo, toDoIndex) => toDoIndex !== index));
  };
  console.log(toDos);
  // console.log(toDos.map((toDo, index) => <li key={index}>{toDo}</li>));

  return (
    <div>
      <h1>My Td Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          onChange={onChange}
          placeholder="Wirte your todo..."
        />
        <button>Add toDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          // onClick에 화살표 함수를 통한 실행형태를 쓰지 않고 그대로 쓰면
          // 바로 싫행이 되므로 화살표 함수로 감싸야 함.
          <li key={index} onClick={() => onRemove(index)}>
            {toDo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
