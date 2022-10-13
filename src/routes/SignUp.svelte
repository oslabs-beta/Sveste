<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store'; //for storing states, NOT USED
  import { push } from 'svelte-spa-router';
  import axios from 'axios';

  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  let emailAddress = '';
  let password = '';

  // onMount(() => {
  // 	emailAddressInput.focus();
  // });

  const handleOnSubmit = async () => {
    const signupFields = {
      Email: [
        {
          Type: 'Primary',
          Value: emailAddress,
        },
      ],
      Password: password,
    };

    const signUpInfo = {
      _id: emailAddress,
      password: password,
    };
    //Initiates axios post to dbrouter to check correct sign up info
    await axios
      .post('/users/signup', {
        _id: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log('response from post: ', response);
        //If axios response verifies info is correct, creates new user in database and redirects to home
        if (response.data.loggedIn) push('/home');
      })
      .catch((err) => {
        console.log('Error in signup');
        //change something to show this
        alert('Email is taken.');
      });
  };

  // const handleOnChange = (evt) => {
  // 	// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
  // 	// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
  // 	passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password' );
  // }
</script>

<Header />
<h1>Create a New Account</h1>
<form class="signupform" on:submit|preventDefault={handleOnSubmit}>
  <div class="innersignupform">
    <label class="form_label" for="emailAddress" type="text">E-Mail</label>
    <input
      class="form_input"
      type="email"
      id="emailAddress"
      bind:value={emailAddress}
      required
    />
  </div>
  <div class="signupform">
    <label class="innersignuppw" for="password">Password</label>
    <input
      class="form_pw"
      type="password"
      id="password"
      bind:value={password}
      required
    />
  </div>
  <button type="submit">Sign Up</button>
  <button on:click|preventDefault={() => push('/login')}>Login</button>
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
