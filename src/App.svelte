<script lang="ts">
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Login from './routes/Login.svelte';
  import SignUp from './routes/SignUp.svelte';
  import NotFound from './routes/NotFound.svelte';
  import Home from './pages/Home.svelte';

  export const loadCookie = () => {
    const myCookieValue = document.cookie;
    console.log('myCookieValues: ', myCookieValue);
    return myCookieValue;
  };

  let routes = {
    '/': Login,
    '/signup': SignUp,
    '/login': Login,
    '/home': Home,
    // This route has a pre-condition function that lets people in only 50% of times, and a second pre-condition that is always true
    // "/home": wrap({
    //   // The Svelte component used by the route
    //   component: Home,
    //   props: {
    //     num: 42,
    //   },

    //   // Custom data: any JavaScript object
    //   // This is optional and can be omitted
    //   // It can be useful to understand the component who caused the pre-condition failure
    //   // userData: {
    //   //     hello: 'world',
    //   //     myFunc: () => {
    //   //         console.log('do something!')
    //   //     }
    //   // },

    //   // List of route pre-conditions
    //   conditions:
    //     // First pre-condition function
    //     (detail) => {
    //       /******PLACEHOLDER FOR ISLOGGED******/
    //       let isLoggedIn = false;
    //       console.log("attempting to access home");
    //       console.log(document);

    //       return isLoggedIn;
    //     },
    // }),
    '*': NotFound,
    //^^if none of the routes work, just for best practices
  };
</script>

<main>
  <Router {routes} />
</main>

<div class="container">
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
