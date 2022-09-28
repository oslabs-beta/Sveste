<script>
  import { onMount } from "svelte";

  let emailAddress = "";
  // let emailAddressInput = null;

  let password = "";
  // let passwordInput = null;

  // onMount(() => {
  // 	emailAddressInput.focus();
  // });

  const handleOnSubmit = () => {
    // Log user into account.
  };

  // const handleOnChange = (evt) => {
  // 	// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
  // 	// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
  // 	passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password' );
  // }
</script>

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
  <button type="submit">Login</button>
</form>

<style>
  .form {
    margin-bottom: 0.875rem;
  }

  .form_label {
    margin-bottom: 0.5rem;
  }

  .form_input {
    margin-bottom: 0;
  }
</style>
