<template lang="pug">
  .content
    .about
      h5.title Sobre Mim
      .textAbout(v-html="about_me")
    TheSkills
    ProfessionalXP
</template>

<script>
import ProfessionalXP from '~/components/index/ProfessionalXP'
import TheSkills from '~/components/index/TheSkills'
import { mapState } from 'vuex'

export default {
  components: {
    ProfessionalXP,
    TheSkills
  },
  computed: mapState([ 'about_me' ]),
  mounted() {
    this.loadText()
  },
  methods: {
    loadText() {
      this.$store.commit('CHANGE_ABOUT_ME')
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
