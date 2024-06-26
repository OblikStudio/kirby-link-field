import App from "./App.vue";
import Preview from "./Preview.vue";

panel.plugin("oblik/link-field", {
	fields: {
		legacyLink: App,
	},
	components: {
		"k-legacyLink-field-preview": Preview,
	},
});
