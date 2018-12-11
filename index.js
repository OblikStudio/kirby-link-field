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
            fields: {
              url: {
                label: "Externer Link",
                type: "url",
                hide: true
              },
              page: {
                label: "Seite",
                type: "text",
                hide: true
              },
              email: {
                label: "E-Mail",
                type: "email",
                hide: true
              }
            }
          }
        },
        methods: {
          input(data) {
            this.$emit("input", data);
          },
          select(type) {
            for(var field in this.fields) {
              this.fields[field].hide = true;
            }
            this.fields[type].hide = false;
          }
        },
        template: `
          <k-field v-bind="$props" class="k-link-field">

            <k-button-group>
              <k-button @click="select(option)" v-for="option in options" :icon="option">{{ option }}</k-button>
            </k-button-group>

            <div class="link-types" v-if="fields">
              <component
                v-for="(field, fieldName) in fields"
                :is="'k-' + field.type + '-field'"
                label=""
                :name="fieldName"
                :class="{ hide: field.hide }"
              >
                <k-button
                  slot="icon"
                  class="k-input-icon-button"
                  link="asd"
                  tabindex="-1"
                  target="_blank"
                />
              </component>
            </div>

          </k-field>
        `
      }
    }
  });