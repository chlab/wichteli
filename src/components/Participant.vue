<template>
  <div class="participant field is-horizontal">
    <div class="field-body">
      <div class="field">
        <!-- @todo: consider adding icons -->
        <input class="input" type="text" placeholder="Name" v-model="name">
      </div>

      <div class="field">
        <input class="input" type="email" placeholder="E-Mail" v-model="email">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    // the id of the participant in the store
    id: {
      type: String
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.getters.participantById(this.id).name
      },
      set (value) {
        this.$store.commit('updateParticipant', { id: this.id, name: value })
      }
    },

    email: {
      get () {
        return this.$store.getters.participantById(this.id).email
      },
      set (value) {
        this.$store.commit('updateParticipant', { id: this.id, email: value })
      }
    }
  }
}
</script>
