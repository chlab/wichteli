<template>
  <div class="box">
    <participant />
    <button class="button is-outlined is-fullwidth">
      Send E-mails to all participants
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Participant from './Participant.vue'

export default Vue.extend({
  components: {
    Participant
  }
})
</script>

<style scoped></style>
