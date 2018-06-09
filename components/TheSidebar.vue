<template lang="pug">
  aside.sidebar
    .profile
      img.img(src="https://avatars1.githubusercontent.com/u/2211332?s=460&v=4")
      h6.name Thamyres Guedes
      span.title UI/UX Designer e Front End Developer
      span.location Juiz de Fora, Minas Gerais - Brasil
    .contact
      span.email
        i.material-icons mail_outline
        | thataguedis@gmail.com
      span.phone
        i.material-icons phone
        | +55 (32) 99950-3827
    .socialMedias
      a.link-icon(href="https://github.com/thamys")
        i.fab.fa-github
      a.link-icon(href="#")
        i.fab.fa-codepen
      a.link-icon(href="#")
        i.fab.fa-linkedin-in
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>

<style lang="sass" scoped>
  .sidebar
    background-color: var(--color-surface-base)
    flex-basis: 30vw
    min-height: 100vh
    padding: 0 16px  
  .profile
    align-items: center
    flex:
      basis: auto
      grow: 0
    margin: 16px 0
    .img
      border-radius: 50%
      margin: 4px 0
      max-width: 20vw
    .name
      font:
        size: 1.25em
        weight: 500
      margin: 16px 0 8px 0
    .title
      margin: 4px 0
      font-size: 0.85em
      letter-spacing: .1em
      text:
        align: center
        transform: uppercase
    .location
      font-size: 0.75em
      margin: 4px 0
      text-align: center

  .contact
    align-items: center
    flex:
      basis: auto
      grow: 0
    margin: 32px 0
    .email, .phone
      display: inline-flex
      letter-spacing: .1em
      text-transform: uppercase
      font-size: .75em
      align-items: center
      margin: 8px 0
      .material-icons
        font-size: 1.25em
        margin-right: 4px

  .socialMedias
    flex:
      basis: auto
      direction: row
      grow: 0
    justify-content: center
    margin: 16px 0
    .link-icon
      border: 1px solid currentColor
        radius: 50%
      color: var(--text-color)
      font-size: 1.5em
      margin: 0 8px
      padding: 8px
</style>


