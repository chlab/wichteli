<template>
  <div>
    <participants-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ParticipantsList from '~/components/ParticipantsList.vue'

@Component({
  components: {
    ParticipantsList
  }
})
export default class App extends Vue {
  mounted() {
    this.$accessor.ADD_PARTICIPANT()
  }
}
</script>

<style lang="css">
body {
  /* https://uigradients.com/#Bourbon */
  background: #ec6f66; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f3a183,
    #ec6f66
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f3a183,
    #ec6f66
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
