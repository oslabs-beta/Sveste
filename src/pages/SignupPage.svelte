<script lang="ts">
  import { push } from 'svelte-spa-router';
  import axios from 'axios';
  import { isLoggedIn, userId } from '../models/store';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  // let emailAddress = '';
  // let password = '';
  //
  // const handleOnSubmit = async () => {
  // const signupFields = {
  //   Email: [
  //     {
  //       Type: 'Primary',
  //       Value: emailAddress,
  //     },
  //   ],
  //   Password: password,
  // };

  // const signupInfo = {
  //   id: emailAddress,
  //   password: password,
  // };
  //Initiates axios post to dbrouter to check correct sign up info
  //   await axios
  //     .post("/api/users", {
  //       _id: emailAddress,
  //       password: password,
  //       type: "signup",
  //     })
  //     .then((response) => {
  //       console.log("response from post: ", response);
  //       //If axios response verifies info is correct, creates new user in database and redirects to home
  //       if (response.data.loggedIn) isLoggedIn.set(true);
  //       userId.set(emailAddress);
  //       push("/home");
  //     })
  //     .catch((err) => {
  //       console.log("Error in signup");
  //       //change something to show this
  //       alert("Email is taken.");
  //     });
  // };

  const handleSignup = async (e: any) => {
    try {
      const formData = await new FormData(e.target);
      const params = new URLSearchParams();
      for (let [key, val] of formData) {
        console.log(key, val);
        if (typeof val !== 'string') val = '';
        params.append(key, val);
      }
      const res = await fetch(`/api/users/signup?${params}`, {
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
<h1>Create a New Account</h1>
<form class="signupform" on:submit|preventDefault={handleSignup}>
  <div class="innersignupform">
    <label class="form_label" for="email" type="text">E-Mail</label>
    <input class="form_input" name="email" type="email" id="email" required />
  </div>
  <div class="signupform">
    <label class="innersignuppw" for="password">Password</label>
    <input
      class="form_pw"
      name="password"
      type="password"
      id="password"
      value=""
      required
    />
  </div>
  <button type="submit">Sign Up</button>
  <!-- <button on:click|preventDefault={() => push('/login')}>Login</button> -->
</form>
<Footer />

<style>
  .signupform {
    margin-bottom: 0.875rem;
  }

  .form_label {
    margin-bottom: 0.5rem;
  }

  .form_pw {
    margin-bottom: 0;
  }
</style>
