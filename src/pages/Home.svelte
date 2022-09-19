<script lang="ts">
  import App from '../App.svelte';
  import CodeDisplay from '../components/CodeDisplay.svelte';
  import FormDisplay from '../components/FormDisplay.svelte';
  import { POST } from '../controllers/submitForm';
</script>

<App>
  <FormDisplay formPOST={POST} />
  <CodeDisplay />
</App>
