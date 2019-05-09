<template>
  <div v-if="linkValue">
    <template v-if="isArray(linkValue)">
      <k-pages-field-preview v-if="linkType === 'page'" v-bind="$props" :value="linkValue" />
      <k-files-field-preview v-else-if="linkType === 'file'" v-bind="$props" :value="linkValue" />
    </template>
    <p v-else class="k-structure-table-text k-url-field-preview">
      <a
        v-if="linkType === 'url'"
        :href="linkValue"
        target="_blank"
        class="k-link"
        @click="handleClick"
      >
        {{ value.text || linkValue }}
      </a>
      <template v-else>
        <template v-if="value.text">
          <strong>{{ value.text }}</strong> {{ linkValue }}
        </template>
        <template v-else>
          {{ linkValue }}
        </template>
      </template>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
    field: Object
  },
  computed: {
    linkType: function () {
      return this.value && this.value.type
    },
    linkValue: function () {
      return this.value && this.value.value
    }
  },
  methods: {
    isArray: Array.isArray,
    handleClick: function (event) {
      // Prevent the structure from expanding.
      event.stopImmediatePropagation()
    }
  }
}
</script>
