// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: "2025-07-15",
 devtools: { enabled: true },
 modules: [
  "@nuxt/eslint",
  "@nuxt/ui",
  "@nuxt/content",
  "@nuxtjs/google-fonts",
  "@nuxt/image",
  "@vueuse/motion/nuxt",
 ],
 googleFonts: {
  families: {
   Saira: true,
  }
 },
 css: ["~/assets/css/main.css"],
});