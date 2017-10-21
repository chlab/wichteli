<template>
  <div class="select is-fullwidth">
    <select @input="$emit('input', $event.target.value)">
      <option value="-">--</option>
      <option v-for="(participant, index) in participants" :value="index">
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
  computed: mapState(['participants'])
}
</script>
