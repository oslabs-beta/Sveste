import "./app.css";
import App from "./App.svelte";
import Home from "./pages/HomePage.svelte";

export const app = new App({
  target: document.getElementById("app"),
});
