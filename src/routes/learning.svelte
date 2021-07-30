<script>
  import { browser } from "$app/env";

  let message = "";
  function readOutLoud(message) {
    if (browser) {
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "th-TH";
      speech.text = message;
      speech.volume = 10;
      speech.rate = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    }
  }

  function pause() {
    speechSynthesis.pause();
  }

  function stop() {
    speechSynthesis.cancel();
  }
</script>

<input
  type="button"
  id="speakBtn"
  on:click={()=>readOutLoud(message)}
  value="Speak"
/>
<input type="button" id="pauseBtn" on:click={pause} value="Pause" />
<input type="button" id="cancelBtn" on:click={stop} value="Cancel" />
<input type="text" bind:value={message} />
<div
  style="position: relative; width: 100%; height: 0; padding-top: 75.0000%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;"
>
  <iframe
    loading="lazy"
    style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAElL0uMpNA&#x2F;view?embed"
  />
</div>
<a
  href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAElL0uMpNA&#x2F;view?utm_content=DAElL0uMpNA&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
  target="_blank"
  rel="noopener">โควิด</a
> โดย วรกฤช สุนทรธรรมนิติ
