import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";  // ✅ ADD

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>  {/* ✅ WRAP APP */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
