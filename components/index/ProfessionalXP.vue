<template lang="pug">
  .professionalXP
    h5.title Experiência Profissional
    .timeline
      .job(v-for="job in experiences")
        img.cpnLogo(:src="job.logo")
        .info
          h5.jobTitle {{ job.title }}
          h6.company {{ job.company }}
          span.period {{ job.period }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfessionalXP',
  computed: mapState([ 'experiences' ])
}
</script>

<style lang="sass" scoped>
  .timeline
    position: relative
    &::before
      background-color: rgba(0, 0, 0, .54)
      content: ""
      height: 100%
      left: 41px
      position: absolute
      width: 1px
      z-index: 1
    
  .job
    align-items: center
    flex: 1
      direction: row
    padding-bottom: 16px
    z-index: 2
    .cpnLogo
      background-color: #fff  
      border: 2px solid #f4f4f4
        radius: 50%
      height: 80px
      margin-right: 16px
      object-fit: contain
      width: 80px
    .info
      flex: 1
      .jobTitle
        font:
          weight: 500
        line-height: 1.5em
      .company, .period
        font:
          size: .85em
          weight: 100
        line-height: 1.25em
</style>

