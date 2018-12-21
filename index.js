panel.plugin("medienbaecker/link", {
    fields: {
      link: {
        props: {
          label: String,
          value: Object,
          options: Array
        },
        data: function() {
          return {
            type: this.value.type,
            link: this.value.link
          }
        },
        watch: {
          value(value) {
            this.type = value.type,
            this.link = value.link;
          }
        },
        methods: {
          input() {
            this.$emit("input", {
              link: this.link,
              type: this.type
            });
          },
          select(option = false) {
            this.$emit("input", {
              link: '',
              type: option
            });
          }
        },
        template: `
          <k-field v-bind="$props" class="k-link-field">

            <k-button v-if="type" @click="select()" slot="options" icon="cancel">{{ $t('change') }}</k-button>

            <k-input theme="field" :icon="type">

              <k-button-group v-if="!type">
                <k-button @click="select(option)" v-for="option in options" :icon="option">
                  {{ $t(option) }}
                </k-button>
              </k-button-group>

              <k-input v-if="type" :id="_uid" v-model="link" type="text" @input="input"/>

            </k-input>

          </k-field>
        `
      }
    }
  });