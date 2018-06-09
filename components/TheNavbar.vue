<template lang="pug">
  .navbar
    a.logo(href="#") Logo
    nav.navItems
      a.navItem.active(href="#") Sobre Mim
      a.navItem(href="#") Blog
      a.navItem(href="#") Potfólio
    .search
      i.iconSearch search
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="sass" scoped>
  .navbar
    flex-direction: row
    justify-content: space-between
    
  .logo, .navItems, .search
    padding: 16px
    
  .logo
    color: var(--text-color)
    text-decoration: none
    
  .navItems
    flex: 1
      wrap: nowrap
    justify-content: center
    .navItem
      color: var(--text-color)
      font:
        size: .85em
        weight: 500
      margin: 0 5px
      padding: 0 10px
      text:
        decoration: none
        transform: uppercase
</style>


