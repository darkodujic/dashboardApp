import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="routes">
          <Routes>
            {routes.map((el) => {
              return (
                <Route key={el.path} path={el.path} element={el.element} />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
