<script setup lang="ts">
defineProps<{
  isLeft: boolean
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex gap-6 items-center lg:w-1/5" :class="isLeft ? 'flex-row md:flex-col' : 'flex-row-reverse md:flex-col'">
    <div class="flex grow-0 shrink-0 self-center justify-center items-center bg-purple-800 rounded-2xl border-2 bg-opacity-30 h-24 w-24 border-purple-600">
      <slot/>
    </div>
    <div class="flex flex-col" :class="isLeft ? 'items-start md:items-center' : 'items-end md:items-center'">
      <h3 class="text-lg font-display font-semibold" :class="isLeft ? 'text-left md:text-center' : 'text-right md:text-center'" v-text="title"/>
      <p class="font-sans text-gray-200 leading-relaxed w-10/12" :class="isLeft ? 'text-left md:text-center' : 'text-right md:text-center'" v-text="description"/>
    </div>
  </div>
</template>

