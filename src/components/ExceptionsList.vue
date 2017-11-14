<template>
    <div class="exceptions-list">
      <div class="notification">
        <h2>Do you want to define some exceptions?</h2>
      </div>

      <Exception v-for="exception in exceptions"
        key="exception.id"
        :id="exception.id"
      ></Exception>

      <button class="button" @click="addNewException">Add another</button>
  </div>
</template>

<script>
import Exception from '@/components/Exception'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Exception
  },

  computed: mapState(['exceptions']),

  methods: {
    ...mapMutations(['addNewException'])
  }
}
</script>
