<template>
  <div>
    <participants-list />
  </div>
</template>

<script>
import ParticipantsList from '~/components/ParticipantsList.vue'

export default {
  components: {
    ParticipantsList
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
