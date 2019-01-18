panel.plugin("medienbaecker/link", {
    fields: {
      link: {
        props: {
          label: String,
          value: Object,
          options: Array,
          endpoints: Object
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
          setType(option = false) {
            console.log(option);
            var link = '';
            if(typeof(option) === "object") {
              link = option[0].id;
              option = "page";
            }
            this.$emit("input", {
              link: link,
              type: option
            });
            this.$nextTick(() => {
              this.$refs.input.focus();
            });
          },
          select(option = false) {
            if(option == "page") {
              this.$refs['pagesDialog'].open({
                endpoint: this.endpoints.field + '/get-pages',
                multiple: false,
                selected: []
              });
            }
            else {
              this.setType(option);
            }
          },
          close() {
            this.$emit("input", {
              link: '',
              type: false
            });
          }
        },
        template: `
          <k-field v-bind="$props" class="k-link-field">

            <k-button v-show="type" @click="select()" slot="options" icon="cancel">{{ $t('link-field.change') }}</k-button>

            <k-input theme="field" :icon="type">

              <k-button-group v-show="!type">
                <k-button @click="select(option)" v-for="option in options" :icon="option">
                  {{ $t('link-field.' + option) }}
                </k-button>
              </k-button-group>

              <k-input ref="input" v-show="type" :id="_uid" v-model="link" type="text" @input="input" @keyup.esc="close"/>

            </k-input>

            <k-pages-dialog ref="pagesDialog" @submit="select"/>

          </k-field>
        `
      }
    }
  });