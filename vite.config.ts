import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // O Vite não lê PORT sozinho. Sem isto, quando o ambiente atribui outra
    // porta o servidor sobe na 5173 assim mesmo e o preview aponta pro vazio.
    port: Number(process.env.PORT) || 5173,
  },
});
