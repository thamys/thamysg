<template lang="pug">
  .content
    .about
      h5.title Sobre Mim
      p Atuo no mercado de trabalho, na Área de tecnologia já a mais de sete anos. Trabalho desenvolvendo User Interfaces para sites, sistemas e aplicativos, aplicando conceitos de UX. Além disso atuo como Front End developer para sites e sistemas web.

      p Tenho conhecimento das principais ferramentas de diagramação como Photoshop, Illustrator e Sketch, além de experiência na utilização de pré-compiladores como Sass, Less e Pug. Facilidade para aprender novas tecnologias e trabalhar em equipe.
    .skills
      h5.title Skills
      ul.listSkills
        each val in [1,2,3,4,5,6,7,8,9,10,11,12]
          li.lineSkill
            span.skill Skill
            .rate
              i.material-icons star
              i.material-icons star
              i.material-icons star
              i.material-icons star_half
              i.material-icons star_border
    .professionalXP
      h5.title Experiência Profissional
      .timeline
        each val in [1,2,3,4,5]
          .job
            img.cpnLogo(src="http://emiolo.com/wp-content/uploads/2017/08/logo_emiolo_site-2.png")
            .info
              h5.jobTitle UI/UX Designer e Front End Developer
              h6.company eMiolo.com Soluções em Internet Ltda.
              span.period Desde setembro 2016 até agora
</template>

<style lang="sass" scoped>
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
    p
      color: rgba(0,0,0, .6)
      font-size: .85em
      line-height: 1.5em
      margin-bottom: 8px
      
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
