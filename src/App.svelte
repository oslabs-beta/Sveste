<script lang="ts">
  import Router, { push }, { push } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Login from "./pages/LoginPage.svelte";
  import SignUp from "./pages/SignupPage.svelte";
  import NotFound from "./pages/404Page.svelte";
  import Home from "./pages/HomePage.svelte";
  import Favorites from "./pages/FavoritesPage.svelte";
  import { isLoggedIn } from "./models/store";

  export const loadCookie = () => {
    const myCookieValue = document.cookie;
    console.log("myCookieValues: ", myCookieValue);
    return myCookieValue;
  };

  let routes = {
    "/": Home,
    "/signup": SignUp,
    "/login": Login,
    "/home": Home,
    "/favorites": wrap({
      // The Svelte component used by the route
      component: Favorites,
      // List of route pre-conditions
      conditions: [
        // First pre-condition function
        (detail) => {
          /********PLACEHOLDER FOR ROUTING CONDITION**********/
          if ($isLoggedIn === false) {
            push("/signup");
            return true;
          } else {
            push("/favorites");
            return true;
          }
        },
      ],
    }),
    "*": NotFound,
  };
</script>

<Router {routes} />
<slot />
