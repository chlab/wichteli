<template>
    <div class="participants-list">
    <div class="notification">
      <h2>Start by adding all the participants. Don't forget to add yourself!</h2>
    </div>

    <Participant v-for="participant in participants"
      :id="participant.id"
      key="participant.id"
    ></Participant>

    <button class="button" @click="addNewParticipant">Add another</button>
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
