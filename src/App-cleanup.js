// import Button from "./Button";
import { useEffect, useState } from "react";

function Hello() {
  // 아래 useEffect 함수는 컴포넌트가 최초로 로드될때 한번 실행되고
  // 리턴 함수가 있으면 컴포넌트가 제거될대 리턴 함수를 실행해 준다.
  useEffect(() => {
    console.log("created :)");

    // 컴포넌트가 destroy될대 뭔가 처리를 하고 싶으면
    // useEffect 함수에서 아래와 같이 함수를 리턴하면 reactjs가 실행시켜 줌
    // cleanup 함수라고 함.
    return () => console.log("destroyed :(");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
