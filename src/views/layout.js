import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "views/home.js";
import Result from "views/result.js";
import Header from "components/header";

const layout = () => {
  return (
    <div className="AppContainer">
      <div className="container-header"><Header/></div>
      <div className="container-content">
        <Routes>
          <Route path="index" element={<Home />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
};

export default layout;
