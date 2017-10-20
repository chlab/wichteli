<template>
  <div id="app">
    <section class="hero">

      <div class="hero-head">
        <div class="container">
          <h1 class="title">
            wichteli
          </h1>
        </div>
      </div>

      <div class="hero-body">
        <div class="container">
          <Participants-List></Participants-List>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import ParticipantsList from '@/components/ParticipantsList'

export default {
  name: 'app',

  components: {
    ParticipantsList
  },

  beforeMount () {
    this.$store.commit('addNewParticipant')
  }
}
</script>

<style lang="sass" src="@/sass/app.sass"></style>
