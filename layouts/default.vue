<template lang="pug">
  main.backLayer
    TheNavbar
    .frontLayer
      TheSidebar
      nuxt
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheSidebar from '~/components/TheSidebar'
export default {
  components: {
    TheNavbar,
    TheSidebar
  }
}
</script>

<style lang="sass">
  // Genérico
  body
    --text-color: #000
    --primary-color: #26A69A
    --second-color: #36747e
    --color-surface-base: #FAFAFA
    color: var(--text-color)
    font:
      family: 'Rubik', sans-serif
      size: 16px
    
  .backLayer
    background-color: var(--primary-color)
    min-height: 100vh
    
  .frontLayer
    background-color: #FFFFFF
    flex-direction: row
    min-height: 100vh
    border-radius: 15px
</style>
