<template>
  <div class="select is-fullwidth">
    <select @input="$emit('input', $event.target.value)">
      <option value="-">--</option>
      <option v-for="(participant, index) in filteredParticipants" :value="index">
        {{ participant.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    // exclude a participant from this list
    exclude: {
      type: Number
    },
    // excludeFrom|excludeTo
    field: {
      type: String
    }
  },
  computed: {
    ...mapState(['participants']),
    filteredParticipants () {
      return this.participants.filter((participant, index) => {
        // filter excluded participants
        return parseInt(index) !== parseInt(this.exclude) &&
        // filter empty participants
        participant.name !== ''
      })
    }
  }
}
</script>
