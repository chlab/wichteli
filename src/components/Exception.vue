<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <ExceptionParticipant
          v-model="excludeFrom"
          :exclude="this.excludeTo"
        ></ExceptionParticipant>
      </div>

      <div class="field has-text-centered">
        should not be assigned to
      </div>

      <div class="field">
        <ExceptionParticipant
          v-model="excludeTo"
          :exclude="this.excludeFrom"
        ></ExceptionParticipant>
      </div>
    </div>
  </div>
</template>

<script>
import ExceptionParticipant from '@/components/ExceptionParticipant'

export default {
  props: {
    // id of the exception in the store
    id: {
      type: String
    }
  },

  components: {
    ExceptionParticipant
  },

  computed: {
    excludeFrom: {
      get () {
        return this.$store.getters.exceptionById(this.id).excludeFrom
      },
      set (value) {
        this.$store.commit('updateException', { id: this.id, excludeFrom: value })
      }
    },
    excludeTo: {
      get () {
        return this.$store.getters.exceptionById(this.id).excludeTo
      },
      set (value) {
        this.$store.commit('updateException', { id: this.id, excludeTo: value })
      }
    }
  }
}
</script>
