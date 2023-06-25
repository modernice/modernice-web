<template>
  <div>
    <Head>
      <!-- <link rel="preload" href="~/assets/fonts/Mona-Sans.woff2" as="font" type="font/woff2">
      <link rel="preload" href="~/assets/fonts/Hubot-Sans.woff" as="font" type="font/woff"> -->
    </Head>
    <LayoutHeader/>
      <slot/>
    <LayoutFooter/>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-[#020112]
}
</style>