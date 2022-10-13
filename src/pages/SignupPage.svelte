<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { userId } from '../models/store';
  import { isLoggedIn } from '../models/store';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  /*
   * On click, redirects emailAddress and password to usersController. usersController checks for duplicates and returns loggedIn true or false status
   */
  const handleSignup = async (e: any) => {
    try {
      const formData = await new FormData(e.target);
      const params = new URLSearchParams();
      for (let [key, val] of formData) {
        if (typeof val !== 'string') val = '';
        params.append(key, val);
      }
      //Initiates fetch post to dbrouter to check correct sign up info
      const res = await fetch(`/api/users/signup?${params}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: params,
      });
      const data: { isValidLogin: boolean; email: string } = await res.json();
      //If fetch response verifies info is correct, creates new user in database and redirects to home
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

<div class="login-page">
  <Header />
  <div class="login-form">
    <h1>Sign Up</h1>
    <div class="inputWrapper">
      <form class="form" on:submit|preventDefault={handleSignup}>
        <div class="input-field">
          <input
            class="form_input"
            type="email"
            id="email"
            name="email"
            required
          />
          <label for="email" value="email">Email</label>
        </div>
        <div class="input-field">
          <input
            class="form_input"
            type="password"
            id="password"
            name="password"
            required
          />
          <label for="password" value="email">Password</label>
        </div>
        <div id="buttondiv" class="action">
          <button value="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .login-page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .login-form {
    background: var(--background);
    width: 500px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
  }
  .login-form h1 {
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  .login-form .input-field {
    padding: 12px 5px;
  }
  .login-form .input-field input {
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 10px 1px;
    border: 0;
    border-bottom: 1px solid #747474;
    outline: none;
    background: transparent;
  }

  .login-form .input-field input:focus {
    border-color: #222;
  }

  .login-form .action {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }
  .login-form .action button {
    width: 100%;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-family: inherit;
    cursor: pointer;
    text-transform: uppercase;
    background: var(--primary-mid);
    color: var(--text-light);
    letter-spacing: 0.2px;
    outline: 0;
    transition: all 0.3s;
  }
  .login-form .action button:hover {
    background: var(--primary);
  }
  .login-form .action button:nth-child(2) {
    background: var(--primary-mid);
    color: var(--text-light);
  }
  .action {
    margin-top: 2rem;
  }
  .footer {
    margin-top: auto;
  }

  /*  */
  .inputWrapper :global(div) {
    display: flex;
    flex-direction: row;
    justify-self: start;
    width: 90%;
    position: relative;
  }
  .inputWrapper :global(label) {
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    transform-origin: left top;
    transition: transform 100ms ease-in-out;
    color: var(--text-mid);
  }

  .inputWrapper :global(input) {
    width: 100%;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 0 0 0.25rem;
    border: none;
    border-bottom: 1px solid var(--shadow);
    background-color: transparent;
  }
  .inputWrapper :global(select) {
    width: auto;
    height: 2.5rem;
    padding-right: 1rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }
  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(input:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--text-mid);
  }

  .inputWrapper :global(select:focus + label),
  .inputWrapper :global(select:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--text-mid);
  }

  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(select:focus + label) {
    color: var(--primary);
  }

  .inputWrapper :global(input:focus),
  .inputWrapper :global(select:focus) {
    outline: none;
  }
</style>
