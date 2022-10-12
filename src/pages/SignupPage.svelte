<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { userId } from '../models/store';
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
<h1>Create a New Account</h1>
<form class="signupform" on:submit|preventDefault={handleSignup}>
  <div class="innersignupform">
    <label class="form_label" for="email" type="text">E-Mail</label>
    <input class="form_input" name="email" type="email" id="email" required />
  </div>
  <div class="innersignupform">
    <label class="form_label" for="password">Password</label>
    <input
      class="form_input"
      name="password"
      type="password"
      id="password"
      value=""
      required
    />
  </div>
  <button class="signup_btn" type="submit">Sign Up</button>
  <!-- <button on:click|preventDefault={() => push('/login')}>Login</button> -->
</form>
<Footer />

<style>
  .signupform {
    height: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .innersignupform {
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
  }

  .form_input {
    margin-left: 2rem;
  }

  .signup_btn {
    margin: 10px;
    margin-right: 0.5rem;
    align-self: center;
  }

  label {
    width: 3rem;
    margin: 0.25rem;
  }
</style>
