<template>
  <div>
    <div class="notification">
      <h2>Start by adding all the participants:</h2>
    </div>
    <Participant></Participant>
  </div>
</template>

<script>
import Participant from '@/components/Participant'

export default {
  components: {
    Participant
  }
}
</script>
