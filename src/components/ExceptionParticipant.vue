<template>
  <div class="select is-fullwidth">
    <select v-model="value" @input="updateValue">
      <option value="-">--</option>
      <option v-for="participant in filteredParticipants" :value="participant.id">
        {{ participant.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    // exclude a participant from this list
    exclude: {
      type: String
    }
  },

  data () {
    // we could directly emit the event target value but let's keep the control
    // of the value in this component so we could reset it in certain situations
    return {
      value: '-'
    }
  },

  computed: {
    /**
     * Filter excluded participants and empty names
     * @return {Array}
     */
    filteredParticipants () {
      return this.$store.state.participants.filter(
        ({ id, name }) => id !== this.exclude && name !== ''
      )
    }
  },

  methods: {
    /**
     * Emit the value to parent
     * @param  {Object} e Event
     */
    updateValue (e) {
      this.value = e.target.value
      this.$emit('input', this.value)
    }
  }
}
</script>
