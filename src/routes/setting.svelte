<script>

  let text = "สวัสดี";
  
  let rate = 1,
    pitch = 1;
  // your script goes here
</script>

<form>
  <input type="text" class="txt" />
  <div>
    <label for="rate">Rate</label><input
      type="range"
      min="0.5"
      max="2"
      step="0.1"
      id="rate"
      bind:value={rate}
    />
    <div class="rate-value">1</div>
    <div class="clearfix" />
  </div>
  <div>
    <label for="pitch">Pitch</label><input
      type="range"
      min="0"
      max="2"
      step="0.1"
      id="pitch"
      bind:value={pitch}
    />
    <div class="pitch-value">1</div>
    <div class="clearfix" />
  </div>
  <select />
</form>
{rate}
{pitch}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
