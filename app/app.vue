<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useSeoMeta({
  titleTemplate: 'Rangga Casper',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <UApp>
      <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
    </UApp>
  </div>
</template>
