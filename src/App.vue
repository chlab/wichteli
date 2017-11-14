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
          <!-- define participants -->
          <section class="section">
            <Participants-List></Participants-List>
          </section>

          <!-- define exceptions -->
          <section class="section" v-if="hasParticipants">
            <div id="exceptions-list-container">
              <Exceptions-List></Exceptions-List>
            </div>
          </section>

          <!-- assign -->
          <section class="section">
            <button class="button is-primary is-large is-block" @click="assign">Assign</button>
          </section>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import ParticipantsList from './components/ParticipantsList'
import ExceptionsList from './components/ExceptionsList'
import { mapGetters } from 'vuex'

import shuffle from 'lodash.shuffle'
import each from 'lodash.foreach'

export default {
  name: 'app',

  components: {
    ParticipantsList,
    ExceptionsList
  },

  computed: {
    ...mapGetters(['hasParticipants'])
  },

  beforeMount () {
    this.$store.commit('addNewParticipant')
    // should we do this conditionally?
    this.$store.commit('addNewException')
  },

  methods: {
    /**/
    assign () {
      // shuffle the participants
      const participantIds = shuffle(this.$store.getters.validParticipants.map(({ id }) => id))
      // find an assignee for each of them
      each(participantIds, participant => {
        let assignee = participantIds.find(id => id !== participant)
      })
    }
  }
}
</script>

<style lang="sass" src="@/sass/app.sass"></style>
