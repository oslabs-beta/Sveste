<script lang="ts">
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Login from "./routes/Login.svelte";
  import SignUp from "./routes/SignUp.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Home from "./pages/Home.svelte";
  import Favorites from "./pages/Favorites.svelte";

  export const loadCookie = () => {
    const myCookieValue = document.cookie;
    console.log("myCookieValues: ", myCookieValue);
    return myCookieValue;
  };

  let routes = {
    "/": Login,
    "/signup": SignUp,
    "/login": Login,
    "/home": Home,
    "/favorites": Favorites,
    "*": NotFound,
  };
</script>

<main />

<div class="container">
  <Router {routes} />
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: 94vw;
    height: 94vh;
    margin: 2vh 2vw;
  }
</style>
