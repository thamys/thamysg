<template lang="pug">
  .content
    .about
      h5.title Sobre Mim
      .textAbout(v-html="text_about")
    TheSkills
    ProfessionalXP
</template>

<script>
import ProfessionalXP from '~/components/index/ProfessionalXP'
import TheSkills from '~/components/index/TheSkills'

export default {
  components: {
    ProfessionalXP,
    TheSkills
  },
  computed: {
    text_about () {
      return this.$store.state.about_me
    }
  }
}
</script>


<style lang="sass">
  .content
    flex: 1
    padding: 16px
    > div
      flex-basis: auto
      margin: 16px 0
    .title
      font:
        size: 1.25em
        weight: 500
      margin-bottom: 16px
    /deep/ p
      color: rgba(0,0,0, .6)
      font-size: .9em
      line-height: 1.5em
      margin-bottom: 8px
</style>
