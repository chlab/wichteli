<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input" type="text" placeholder="Name" :value="participant.name" @blur="updateValue('name', $event.target.value)" />
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" :value="participant.email" @blur="updateValue('email', $event.target.value)" />
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Participant as ParticipantType } from '~/entities/types';

const AppProps = Vue.extend({
  props: {
    participant: Object as () => ParticipantType
  }
})

@Component
export default class Participant extends AppProps {
  updateValue(field: string, value: string) {
    this.$accessor.updateParticipant({
      ...this.participant,
      [field]: value
    })
  }
}
</script>

<style scoped></style>
