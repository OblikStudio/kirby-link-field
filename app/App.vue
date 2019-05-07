<template>
  <k-field v-bind="$props" class="k-link-field">
    <k-button
      slot="options"
      v-if="hasSettings"
      :icon="isMainScreen ? 'cog' : 'cancel'"
      @click="switchScreen"
    >
      {{ isMainScreen ? $t('label.settings') : $t('label.close') }}
    </k-button>

    <LinkSelect
      v-if="isMainScreen"
      v-model="link"
      :options="options"
      :endpoints="endpoints"
      @input="emitInput"
    ></LinkSelect>
    <LinkSettings
      v-else
      v-model="settingsData"
      :types="settings"
      @input="emitInput"
    ></LinkSettings>
  </k-field>
</template>

<script>
import LinkSelect from './LinkSelect.vue'
import LinkSettings from './LinkSettings.vue'

export default {
  components: {
    LinkSelect,
    LinkSettings
  },
  props: {
    value: Object,
    endpoints: Object,

    label: String,
    help: String,
    disabled: Boolean,

    options: Array,
    settings: Object
  },
  data: function () {
    // When the field is in a structure, the initial value is `null` and a
    // default value is not fetched from the backend, so it's specified here.
    var data = this.value || {
      type: 'url'
    }

    return {
      data: data,
      screen: 'link'
    }
  },
  computed: {
    link: {
      get: function () {
        return {
          type: this.data.type,
          value: this.data.value
        }
      },
      set: function (input) {
        Object.assign(this.data, input)
      }
    },
    settingsData: {
      get: function () {
        return {
          text: this.data.text,
          popup: this.data.popup,
          hash: this.data.hash
        }
      },
      set: function (input) {
        Object.assign(this.data, input)
      }
    },
    isMainScreen: function () {
      return this.screen === 'link'
    },
    hasSettings: function () {
      return this.settings !== false
    }
  },
  methods: {
    emitInput: function () {
      this.$emit('input', this.data)
    },
    switchScreen: function () {
      this.screen = this.isMainScreen ? 'options' : 'link'
    }
  },
  watch: {
    value: function (value) {
      this.data = Object.assign({}, value)
    },
    data: {
      deep: true,
      immediate: true,
      handler: function () {
        // If the link type is not valid (e.g. when changing the blueprint), set
        // it to a valid one.
        if (this.options.indexOf(this.data.type) < 0) {
          this.data.type = this.options[0]
          this.data.value = undefined
        }

        // Pages and files fields expect an array.
        if (this.data.type.match(/page|file/) && !Array.isArray(this.data.value)) {
          this.data.value = undefined
        }

        // Convert null to undefined, otherwise pages and files fields break.
        if (!this.data.value) {
          this.data.value = undefined
        }
      }
    }
  }
}
</script>
