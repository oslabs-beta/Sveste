<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { isLoggedIn, userId } from '../models/store';
  import { stringify } from 'querystring';
  //axios.defaults.baseURL = 'http://localhost:3000';

  let emailAddress = '';
  let password = '';

  const handleLogin = async (e: any) => {
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
      if (data.isValidLogin) {
        userId.set(data.email);
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
<h1>Login</h1>
<form class="form" on:submit|preventDefault={handleLogin}>
  <div class="innerform">
    <label class="form_label" for="emailAddress" type="text">E-Mail</label>
    <input class="form_input" type="email" id="email" name="email" required />
  </div>
  <div class="innerform">
    <label class="form_label" for="password">Password</label>
    <input
      class="form_input"
      type="password"
      id="password"
      name="password"
      required
    />
  </div>
  <div id="buttondiv">
    <button type="submit" value="login">Login</button>
    <button value="signup" on:click|preventDefault={() => push('/signup')}
      >Sign Up</button
    >
  </div>
</form>
<Footer />

<style>
  .form {
    height: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  h1 {
    align-self: center;
  }
  .form_label {
    margin: 0.25rem;
  }
  .form_input {
    margin-left: 2rem;
  }
  #buttondiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .innerform {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
  }

  .form_input {
    margin-bottom: 0;
  }
</style>
