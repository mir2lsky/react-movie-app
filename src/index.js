import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode가 적용되면 일부 라이프사이클 메서드가 두번 호출되어
  // console.log를 찍으면 두번 찍히는데 개발서버에서만 그렇고 프로덕션에서는 한번만 찍힘
  // 보기 싫으면 아래 StrictMode를 주석처리 하면 1번만 찍힘
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
