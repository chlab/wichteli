<template>
    <div class="participants-list">
    <div class="notification">
      <h2>Start by adding all the participants:</h2>
    </div>
    <Participant v-for="(participant, index) in participants"
      :id="index"
      key="participant.email"
    ></Participant>
  </div>
</template>

<script>
import Participant from '@/components/Participant'
import { mapState } from 'vuex'

export default {
  components: {
    Participant
  },
  computed: mapState(['participants'])
}
</script>
