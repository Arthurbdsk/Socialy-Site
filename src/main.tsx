import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// A base entra antes dos componentes: senão as regras de .btn ganham dos
// modificadores de cada seção, que têm a mesma especificidade.
import "./styles/global.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
