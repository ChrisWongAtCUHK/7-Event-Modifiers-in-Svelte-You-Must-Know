<script>
  let output = '';
  function checkboxClick(event) {
    let warn = "preventDefault() won't let you check this!<br>";
    output += warn;
  }
</script>

<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox"  on:click|preventDefault={checkboxClick}/>
</form>

<div>{@html output}</div>

<style>

</style>
