<template>
    <div class="exceptions-list">
    <div class="notification">
      <h2>Do you want to define some exceptions?</h2>
    </div>

    <Exception v-for="(exception, index) in exceptions"
      key="index"
      :id="index"
    ></Exception>

  </div>
</template>

<script>
import Exception from '@/components/Exception'
import { mapState } from 'vuex'

export default {
  components: {
    Exception
  },

  computed: mapState(['exceptions'])
}
</script>
