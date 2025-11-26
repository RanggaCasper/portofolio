<script setup lang="ts">
import { navLinks } from "~/utils/links";
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />
    <UContainer>
      <main class="flex-1 mt-6">
        <slot />
      </main>
    </UContainer>
    <AppFooter />
  </div>
</template>
