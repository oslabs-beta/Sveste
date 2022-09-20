<script lang="ts">
  import CopyToClipboard from "./CopyToClipboard.svelte";
  let tryText = "";
</script>

<div>
  <p>CodeDisplay</p>
  <textarea
    type="text"
    class="try-input"
    bind:value={tryText}
    placeholder="Generated Tests"
  />
  <div class="actions">
    <CopyToClipboard
      on:copy={() => alert("successfully copied!")}
      text={tryText}
      let:copy
    >
      <div class="action">
        <button
          disabled={tryText.length === 0}
          id="try-copy-button"
          on:click={copy}
        >
          Click to copy to clipboard
        </button>
      </div>
    </CopyToClipboard>
  </div>
</div>
