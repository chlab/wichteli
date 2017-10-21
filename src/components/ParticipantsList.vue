<template>
    <div class="participants-list">
    <div class="notification">
      <h2>Start by adding all the participants:</h2>
    </div>
    <Participant v-for="(participant, index) in participants"
      :id="index"
      key="index"
    ></Participant>
    <button class="button is-primary" @click="addNewParticipant">Add another</button>
  </div>
</template>

<script>
import Participant from '@/components/Participant'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Participant
  },

  computed: mapState(['participants']),

  methods: {
    ...mapMutations(['addNewParticipant'])
  }
}
</script>
