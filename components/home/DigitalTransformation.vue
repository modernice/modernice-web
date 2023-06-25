<template>
  <div :class="$style.background">
    <div class="flex flex-col items-center px-4 text-gray-100 gap-12 max-w-6xl mx-auto pb-16 lg:py-32">
      <h2 class="text-2xl text-center font-display font-bold lg:text-5xl lg:w-2/3 !leading-snug uppercase">Ihr Partner für die Digitale Transformation</h2>
    
      <div class="flex flex-col md:flex-row gap-8">
        <HomeService :isLeft="true" title="Website-Strategie" description="Präzise Strategien für ihren Online-Auftritt">
          <img class="h-12 w-auto" src="~/assets/serviceIcon/analysis.png" alt=""/>
        </HomeService>
        <HomeService :isLeft="false" title="SEO-Entwicklung" description="Optimieren Sie Ihre Online-Präsenz">
          <img class="h-12 w-auto" src="~/assets/serviceIcon/seo.png" alt=""/>
        </HomeService>
        <HomeService :isLeft="true" title="E-Commerce" description="Navigieren Sie effektiv im digitalen Markt.">
          <img class="h-12 w-auto" src="~/assets/serviceIcon/online-shop.png" alt=""/>
        </HomeService>
        <HomeService :isLeft="false" title="App Entwicklung" description="Ihre Dienstleistungen immer griffbereit für Ihre Kunden.">
          <img class="h-12 w-auto" src="~/assets/serviceIcon/app-development.png" alt=""/>
        </HomeService>
        <HomeService :isLeft="true" title="Website-Design" description="Gestalten Sie eine überzeugende Online-Identität.">
          <img class="h-12 w-auto" src="~/assets/serviceIcon/web-design.png" alt=""/>
        </HomeService>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" module>
.background {
  @apply bg-cover bg-center;

  background-image: url('~/assets/background/bg2small.jpg');

  @screen md {
    background-image: url('~/assets/background/bg2.jpg');
  }
}
</style>