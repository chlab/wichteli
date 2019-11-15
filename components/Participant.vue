<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input" type="text" placeholder="Name" />
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
