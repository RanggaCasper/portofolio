<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const color = useColorMode();
defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <UHeader
    mode="drawer"
    class="backdrop-blur-md bg-(--ui-bg)/70 border-b"
  >
    <!-- Brand -->
    <template #title>
      <ULink to="/" class="text-lg font-semibold flex items-center gap-2">
        <UIcon name="i-heroicons-command-line" class="text-2xl" />
        RanggaCasper
      </ULink>
    </template>

    <div class="hidden lg:flex">
      <UNavigationMenu :items="links" />
    </div>

    <template #right>
      <div class="flex items-center gap-2">
        <UColorModeSelect :arrow="false" />

        <UTooltip
          text="Open on GitHub"
          :kbds="['meta', 'G']"
          class="hidden lg:inline-flex"
        >
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/RanggaCasper"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </template>

    <template #body>
      <UNavigationMenu
        :items="links"
        orientation="vertical"
        class="lg:hidden px-4 py-2"
      />
    </template>
  </UHeader>
</template>
