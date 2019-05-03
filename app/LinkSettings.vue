<template>
  <section class="k-structure-form">
    <k-form
      class="k-structure-form-fields"
      v-model="data"
      :fields="fields"
      @input="$emit('input', data)"
    />
  </section>
</template>

<script>
export default {
  props: {
    value: Object,
    types: Object
  },
  data: function () {
    return {
      data: this.value
    }
  },
  computed: {
    fields: function () {
      var value = {
        text: {
          type: 'text',
          label: this.$t('label.text'),
          width: '1/2',
        },
        popup: {
          type: 'toggle',
          label: this.$t('label.popup'),
          width: '1/4'
        },
        hash: {
          type: 'text',
          label: this.$t('label.hash'),
          width: '1/4',
          placeholder: this.$t('placeholder.elementid')
        }
      }

      for (var k in this.types) {
        if (this.types[k] === false) {
          delete value[k]
        } else if (value[k]) {
          Object.assign(value[k], this.types[k])
        }
      }

      return value
    }
  },
  watch: {
    value: function (value) {
      Object.assign(this.data, value)
    }
  }
}
</script>
