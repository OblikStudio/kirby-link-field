<template>
  <k-field v-bind="$props" class="k-link-field">
    <k-grid>
      <k-column v-if="showSelect" width="1/4">
        <k-select-field
          type="select"
          v-model="data.type"
          :options="types"
          :empty="false"
        />
      </k-column>

      <k-column :width="showSelect ? '3/4' : null">
        <k-url-field v-if="data.type === 'url'" v-model="data.url" />

        <k-pages-field
          v-else-if="data.type === 'page'"
          v-model="data.page"
          :endpoints="{
            field: this.endpoints.field + '/pages'
          }"
        ></k-pages-field>

        <k-files-field
          v-else-if="data.type === 'file'"
          v-model="data.file"
          :endpoints="{
            field: this.endpoints.field + '/files'
          }"
        ></k-files-field>

        <k-email-field v-else-if="data.type === 'email'" v-model="data.email" />

        <k-tel-field v-else-if="data.type === 'tel'" v-model="data.tel" />

        <k-box
          v-else
          theme="negative"
          :text="$t('error.type', { type: data.type })"
        />
      </k-column>
    </k-grid>
  </k-field>
</template>

<script>
export default {
  props: {
    value: Object,
    endpoints: Object,

    label: String,
    help: String,

    options: Array
  },
  data: function() {
    var data = Object.assign({
      type: 'url'
    }, this.value)

    var types = this.options.map(function (type) {
      return {
        value: type,
        text: this.$t(type)
      }
    }.bind(this))

    return {
      data: data,
      types: types,
      updatingValue: false
    }
  },
  computed: {
    showSelect: function () {
      return this.types.length > 1
    }
  },
  created: function () {
    // If the link type is not valid (e.g. when changing the blueprint), set
    // it to a valid one.
    if (this.options.indexOf(this.data.type) < 0) {
      this.data.type = this.options[0]
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function (value) {
        if (!this.updatingValue) {
          this.$emit('input', value)
        }
      }
    },
    value: {
      immediate: true,
      handler: function (value) {
        this.updatingValue = true

        Object.assign(this.data, value)

        this.$nextTick(function () {
          this.updatingValue = false
        }.bind(this))
      }
    }
  }
}
</script>

<style lang="scss">
.k-link-field {
  .k-field {
    .k-field-header {
      display: none; // hides the Select buttons
    }
  }
}
</style>
