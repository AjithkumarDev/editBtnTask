import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Component/Main";
import Error from "./Component/Error";
import AddEmployee from "./Component/Addedit";

function App(props) {
  const id = props.id;
  console.log(id);

  return (
    <div className="App">
      <h1>React Js Rest API</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={`/add`} element={<AddEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
