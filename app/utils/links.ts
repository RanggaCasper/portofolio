import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Projects',
  icon: 'i-heroicons-folder',
  to: '/projects'
}, {
  label: 'Stuff',
  icon: 'i-heroicons-book-open',
  to: '/stuff'
}, {
  label: 'Contact',
  icon: 'i-heroicons-device-phone-mobile',
  to: '/contact'
}]