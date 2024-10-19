
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import ContextProvider from "./context/myContext.jsx";
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ContextProvider>

    <App />
  </ContextProvider>
  </BrowserRouter>
);
