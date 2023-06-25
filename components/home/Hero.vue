<template>
  <div :class="$style.background">
    <div class="flex max-w-6xl mx-auto justify-center py-4">
      <img src="~/assets/logo/modernice.png" class="h-auto w-20 md:w-24"/>
    </div>
    <div class="flex flex-col flex-none px-4 pt-32 pb-40 md:pb-52 gap-24">
      <div class="flex flex-col md:items-center gap-6 md:gap-16">
        <h1 class="text-gray-100 font-display font-semibold text-center text-2xl lg:text-5xl leading-relaxed"><span class="uppercase font-bold text-3xl lg:text-7xl">Neue Horizonte mit</span><br><span class="text-[#793DFD]">modernice.design</span></h1>
        <p class="text-gray-300 text-center leading-relaxed text-sm lg:text-lg lg:w-1/3">Mit modernice.design nutzen Sie künstliche Intelligenz, um Ihre Geschäftsprozesse zu optimieren. Erfahren Sie, wie wir die Leistungsfähigkeit Ihrer Prozesse steigern können.
        </p>
      </div>
      <nuxtLink to="#contact" :class="$style.button">
        Die Macht von AI entdecken
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" module>
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

.background {
  @apply bg-cover bg-no-repeat bg-bottom md:bg-center;

  background-image: url('~/assets/background/bg1small.jpg');

  @screen md {
    background-image: url('~/assets/background/bg1.jpg');
  }
}
</style>