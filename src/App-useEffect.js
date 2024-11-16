// import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 상태가 변경될 때마다 계속 실행됨
  // console.log("I run all the time");
  // const isRunOnlyOne = () => console.log("I run only one");

  // 최초 로딩시 한번만 실행
  // 두번째 파라미터를 빈 배열로 설정하면 react가 상태변화를 감지할 필요가 없으니 한번만 실행
  useEffect(() => {
    console.log("I run only once");
  }, []);

  // 컴포넌트 최초 로드 시 처음 실행되고 그 이후 keyword(상태)가 변경될때만 실행
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    console.log("I run when 'keyword' changs.");
    // }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changs.");
  }, [counter]);

  // keyword, counter 둘다 감시해서 변경 시 실행
  useEffect(() => {
    console.log("I run when 'keyword & counter' changs.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button text="Continue" onClick={onClick} /> */}
      <button onClick={onClick}>Counter</button>
    </div>
  );
}

export default App;
