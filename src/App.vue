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
          <section class="section">
            <Participants-List></Participants-List>
          </section>

          <section class="section" v-if="hasParticipants">
            <Exceptions-List></Exceptions-List>
          </section>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import ParticipantsList from './components/ParticipantsList'
import ExceptionsList from './components/ExceptionsList'

export default {
  name: 'app',

  components: {
    ParticipantsList,
    ExceptionsList
  },

  computed: {
    hasParticipants () {
      return this.$store.state.participants.length > 1
    }
  },

  beforeMount () {
    this.$store.commit('addNewParticipant')
    // should we do this conditionally?
    this.$store.commit('addNewException')
  }
}
</script>

<style lang="sass" src="@/sass/app.sass"></style>
