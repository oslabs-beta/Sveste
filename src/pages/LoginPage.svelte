<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { isLoggedIn, userId } from '../models/store';
  import { stringify } from 'querystring';

  let emailAddress = '';
  let password = '';

  /*
   * On click, redirects emailAddress and password to usersController. usersControllers checks for credentials and return loggedIn true or false status
   */
  const handleLogin = async (e: any) => {
    //Initiate fetch post request to the server
    try {
      const formData = await new FormData(e.target);
      const params = new URLSearchParams();
      for (let [key, val] of formData) {
        if (typeof val !== 'string') val = '';
        params.append(key, val);
      }
      const res = await fetch(`/api/users/login?${params}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: params,
      });
      const data: { isValidLogin: boolean; email: string } = await res.json();
      //If response field return loggedIn is true, redirect client to home page, loggedIn verifies the user's account, and allows for user access to favorites page
      if (data.isValidLogin) {
        userId.set(data.email);
        isLoggedIn.set(true);
        push('/home');
      }
      return data;
    } catch (err: Error | unknown) {
      let message = err instanceof Error ? err.message : 'unknown signup error';
      return alert(JSON.stringify(message));
    }
  };
</script>

<Header />
<div class="login-form">
  <h1>Login</h1>
  <form class="form" on:submit|preventDefault={handleLogin}>
    <div class="input-field">
      <input
        class="form_input"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
    </div>
    <div class="input-field">
      <input
        class="form_input"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
    </div>
    <div id="buttondiv" class="action">
      <button class="login_btn" type="submit" value="login">Login</button>
      <button value="signup" on:click|preventDefault={() => push('/signup')}
        >Sign Up</button
      >
    </div>
  </form>
</div>
<Footer />

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #e35869;
    font-family: 'Rubik', sans-serif;
  }

  .login-form {
    background: var(--background);
    width: 500px;
    margin: 65px auto;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
  }
  .login-form h1 {
    padding: 35px 35px 0 35px;
    font-weight: 300;
  }
  .login-form .content {
    padding: 35px;
    text-align: center;
  }
  .login-form .input-field {
    padding: 12px 5px;
  }
  .login-form .input-field input {
    font-size: 16px;
    display: block;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    padding: 10px 1px;
    border: 0;
    border-bottom: 1px solid #747474;
    outline: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .login-form .input-field input:focus {
    border-color: #222;
  }

  .login-form .action {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }
  .login-form .action button {
    width: 100%;
    border: none;
    padding: 18px;
    font-family: inherit;
    cursor: pointer;
    text-transform: uppercase;
    background: #e8e9ec;
    color: #777;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 0;
    letter-spacing: 0.2px;
    outline: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .login-form .action button:hover {
    background: #d8d8d8;
  }
  .login-form .action button:nth-child(2) {
    background: var(--primary-mid);
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  }
  .login-form .action button:nth-child(2):hover {
    background: var(--primary);
  }
  input {
    background: transparent;
  }
</style>
