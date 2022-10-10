<script lang="ts">
  import axios from "axios";
  import { push } from "svelte-spa-router";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { isLoggedIn, userId } from "../models/store";

  let emailAddress = "";
  let password = "";

  /*
   * On click, redirects emailAddress and password to dbrouter. Dbrouter checks for credentials and return loggedIn true or false status
   */
  const handleOnSubmit = async () => {
    //Initiate axios post request to the server
    await axios
      .post("/users/login", {
        _id: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log("Login Response: ", response);
        //If response field return loggedIn is true, redirect client to home page
        //loggedIn verifies the user's account, and allows for user access to favorites page
        if (response.data.loggedIn) {
          isLoggedIn.set(true);
          userId.set(emailAddress);
          console.log($userId);
          push("/home");
        }
      })
      .catch(function (error) {
        console.log("error in login", error);
        //set a variable here that can trigger an "incorrect password" message
        alert("Incorrect login/password.");
      });
  };

  // const handleOnChange = (evt) => {
  // 	// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
  // 	// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
  // 	passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password' );
  // }
</script>

<Header />
<h1>Login</h1>
<form class="form" on:submit|preventDefault={handleOnSubmit}>
  <div class="innerform">
    <label class="form_label" for="emailAddress" type="text">E-Mail</label>
    <input
      class="form_input"
      type="email"
      id="emailAddress"
      bind:value={emailAddress}
      required
    />
  </div>
  <div class="innerform">
    <label class="form_label" for="password">Password</label>
    <input
      class="form_input"
      type="password"
      id="password"
      bind:value={password}
      required
    />
  </div>
  <div id="buttondiv">
    <button class="login_btn" type="submit">Login</button>
    <button class="submit_btn" on:click|preventDefault={() => push("/signup")}
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
  .form_input {
    margin-left: 2rem;
  }
  #buttondiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.8rem;
  }

  .login_btn {
    margin-right: 0.5rem;
  }

  .innerform {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
  }

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 3rem;
    margin: 0.25rem;
  }
</style>
