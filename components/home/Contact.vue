<script setup lang="ts">
import { faUserHeadset, faEnvelope, faMapLocation } from '@fortawesome/pro-light-svg-icons'
</script>

<template>
  <div :class="$style.background">
    <div class="flex flex-col items-center gap-16 max-w-6xl mx-auto pt-6 md:pt-10">
      <div class="flex flex-col items-center text-gray-100 pt-12 md:py-20 gap-10">
        <h2 class="text-3xl text-center font-display font-bold lg:text-5xl" id="contact">Kontaktieren Sie uns</h2>

        <a href="https://cal.com/nice-saman/hello" target="_blank" class="hidden md:block lg:mt-8" :class="$style.button">
        Online Termin vereinbaren
        </a>
        
        <div class="flex flex-col items-center gap-3">
          <p>Rufen Sie uns an, senden Sie uns eine Email</p>
          <div class="flex flex-col items-center gap-3 md:flex-row">
          <a href="tel:+4951216972020" :class="$style.smallButton">
            <Icon :icon="faUserHeadset"/>
            <p class="mt-px">+49 5121 6972020</p>
          </a>
          <a href="mailto:hello@modernice.design" :class="$style.smallButton">
            <Icon :icon="faEnvelope"/>
            <p class="mt-px">hello@modernice.design</p>
          </a>
          </div>
        </div>
        <div class="flex flex-col items-center gap-3">
          <p>Oder besuchen Sie uns in unserem Büro in Hildesheim</p>
          <a href="https://goo.gl/maps/8A7cv243FgXvSWbi7" target="_blank" :class="$style.smallButton">
            <Icon :icon="faMapLocation"/>
            <p class="mt-px">Senator-Braun-Allee 9</p>
          </a>
        </div>
      </div>

      <a href="#" class="md:hidden" :class="$style.button">
        Online Termin vereinbaren
      </a>
      <p class="w-2/3 text-center font-light text-lg text-gray-300 md:hidden">Gemeinsam gestalten wir 
  Ihre digitale Zukunft.</p>
      <div :class="$style.flare" class="w-full grid grid-cols-3 items-center py-4 md:py-6">
        <p class="hidden md:block md:col-start-2 text-gray-300 font-light justify-self-center">Gemeinsam gestalten wir Ihre digitale Zukunft.</p>
        <p class="font-sans text-gray-300 col-start-2 justify-self-center md:col-start-3  md:justify-self-end">modernice.design</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" module>
.background {
  @apply bg-cover bg-center;

  background-image: url('~/assets/background/bg3small.jpg');

  @screen md {
    background-image: url('~/assets/background/bg3.jpg');
  }
}

.flare {
  @apply bg-cover;

  background-image: url('~/assets/background/bgflare.png');
}
.smallButton {
  @apply self-center text-lg flex flex-row items-center rounded-full;
  @apply px-4 py-1 gap-2 border border-blue-400 bg-blue-800 bg-opacity-30;
  @apply hover:bg-opacity-50 hover:text-white;
}

.button {
  @apply rounded-xl font-display text-lg border-2 border-[#8068DC] py-4 px-8 place-self-center;
  @apply text-gray-200 bg-opacity-50 hover:bg-opacity-100;

  font-variation-settings: 'wght' 550, 'wdth' 110;
  background: radial-gradient(
        closest-side,
        rgba(64, 32, 133, 0.43) 20%,
        rgba(116, 114, 242, 0.4) 140%
      );
}

.button:hover {
  background: radial-gradient(
        closest-side,
        rgba(64, 32, 133, 0.6) 20%, /* increased opacity */
        rgba(116, 114, 242, 0.5) 140%
      );
}
</style>