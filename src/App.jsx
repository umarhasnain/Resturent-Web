import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import routes from "./Routes/index.jsx";
import Product from "./Pages/auth/Product.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  // console.log(routes);

  return (
    <div>
      <Routes>
        {routes.map((item, index) => {
          const { path, element } = item;
          return <Route key={index} path={path} element={element} />;
        })}
        {/* <Route path="/product" element={<Product />}/> */}
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
