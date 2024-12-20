import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/hello`}
          element={<h1>Hello</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
