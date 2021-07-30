<script>
  import { pitch, rate } from "$lib/audioStore";

  import "../app.postcss";
  function pause() {
    speechSynthesis.pause();
  }

  function stop() {
    speechSynthesis.cancel();
  }
</script>

<body>
  <ion-split-pane content-id="main" when="md">
    <ion-menu content-id="main" side="start" type="overlay">
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen={true}>
        <ion-list>
          <a href="/">
            <ion-item>
              <ion-icon name="home" slot="start" />
              <ion-label>Home</ion-label>
            </ion-item>
          </a>
          <a href="/covid">
            <ion-item>
              <ion-icon name="chatbubbles" slot="start" />
              <ion-label>Covid</ion-label>
            </ion-item>
          </a>
          <a href="/setting">
            <ion-item>
              <ion-icon name="settings" slot="start" />
              <ion-label>Settings</ion-label>
            </ion-item>
          </a>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main">
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" /></ion-buttons
          >
          <ion-button href="/">Home</ion-button>
          <ion-button href="/covid">หน้า Canva</ion-button>
          <ion-button href="/learning">หน้า SlideShow</ion-button>

          <ion-button on:click={pause}>Pause</ion-button>
          <ion-button on:click={stop}>Stop</ion-button>
          ระดับเสียง
          <input type="number" step="0.1" bind:value={$pitch} />
          ความเร็วเสียง
          <input type="number" step="0.1" bind:value={$rate} />
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <slot><!-- optional fallback --></slot>
      </ion-content>
    </div>
  </ion-split-pane>
</body>
