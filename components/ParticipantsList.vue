<template>
  <div class="box">
    <participant
      v-for="participant in $accessor.participantsOrderedById"
      :key="participant.id"
      :participant="participant"
    />
    <button class="button is-outlined is-fullwidth">
      Send E-mails to all participants
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Participant from './Participant.vue'

@Component({
  components: {
    Participant
  }
})
export default class ParticipantsList extends Vue {
}
</script>

<style scoped></style>
