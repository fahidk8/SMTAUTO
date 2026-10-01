// App entry point. Wraps the site in the router.
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter><App /></BrowserRouter>
);
