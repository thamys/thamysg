<template lang="pug">
  .skills
    h5.title Skills
    div(v-for="(category, index) in skills" :class="index")
      h6.categoryTitle {{category.title}}
      ul.listSkills
        li.lineSkill(v-for="skill in category.items")
          span.skill {{skill}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheSkills',
  computed: mapState([ 'skills' ]),
  mounted() {
    this.loadSkills()
  },
  methods: {
    loadSkills() {
      this.$store.commit('CHANGE_SKILLS')
    }
  }
}
</script>

<style lang="sass" scoped>
  .categoryTitle
    margin: 1em 0 .5em 0
  .listSkills
    flex: 1
      direction: row
  .lineSkill
    align-items: flex-end
    color: rgba(0,0,0,.6)
    flex-basis: 50%
    font-size: .85em
    margin-bottom: 8px
    .skill
      letter-spacing: .1em
      text-transform: uppercase
    .rate
      flex: 1
        direction: row
      margin-left: 8px
      .material-icons
        font-size: 1.5em
        margin-bottom: -1px
</style>

