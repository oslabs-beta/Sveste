<script>
  import { push } from "svelte-spa-router";
  import axios from "axios";
  import { isLoggedIn, userId } from "../models/store";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  let emailAddress = "";
  let password = "";

  /*
   * On click, redirects emailAddress and password to dbrouter. Dbrouter checks for duplicates and returns loggedIn true or false status
   */
  const handleOnSubmit = async () => {
    const signupFields = {
      Email: [
        {
          Type: "Primary",
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
      .post("/users/signup", {
        _id: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log("response from post: ", response);
        //If axios response verifies info is correct, creates new user in database and redirects to home
        if (response.data.loggedIn) isLoggedIn.set(true);
        userId.set(emailAddress);
        push("/home");
      })
      .catch((err) => {
        console.log("Error in signup");
        alert("Email is taken.");
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
  <div class="innersignupform">
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
    <button class="signup_btn" type="submit">Sign Up</button>
    <button class="login_btn" on:click|preventDefault={() => push("/login")}
      >Login</button
    >
  </div>
</form>
<Footer />

<style>
  .signupform {
    margin-bottom: 0.875rem;
    height: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .innersignupform {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
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

  .signup_btn {
    margin-right: 0.5rem;
  }

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 3rem;
    margin-left: 3rem;
    margin: 0.25rem;
  }
</style>
