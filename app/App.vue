<template>
	<k-field v-bind="$props" class="k-link-field">
		<k-button
			slot="options"
			v-if="hasSettings"
			:icon="isMainScreen ? 'cog' : 'cancel'"
			@click="switchScreen"
		>
			{{ isMainScreen ? $t("label.settings") : $t("label.close") }}
		</k-button>

		<LinkSelect
			v-if="isMainScreen"
			v-model="link"
			:width="width"
			:linkTypes="linkTypes"
			:endpoints="endpoints"
			@input="emitInput"
		></LinkSelect>
		<LinkSettings
			v-else
			v-model="settingsData"
			:settings="settings"
			@input="emitInput"
		></LinkSettings>
	</k-field>
</template>

<script>
import LinkSelect from "./LinkSelect.vue";
import LinkSettings from "./LinkSettings.vue";

export default {
	components: {
		LinkSelect,
		LinkSettings,
	},
	props: {
		value: Object,
		endpoints: Object,

		width: String,
		label: String,
		help: String,
		disabled: Boolean,
		required: Boolean,

		linkTypes: Array,
		settings: Object,
	},
	data: function () {
		return {
			data: this.value,
			screen: "link",
		};
	},
	computed: {
		link: {
			get: function () {
				return {
					type: this.data.type,
					value: this.data.value,
				};
			},
			set: function (input) {
				Object.assign(this.data, input);
			},
		},
		settingsData: {
			get: function () {
				return {
					text: this.data.text,
					popup: this.data.popup,
					hash: this.data.hash,
				};
			},
			set: function (input) {
				Object.assign(this.data, input);
			},
		},
		isMainScreen: function () {
			return this.screen === "link";
		},
		hasSettings: function () {
			return (
				this.settings &&
				typeof this.settings === "object" &&
				Object.keys(this.settings).length > 0
			);
		},
	},
	methods: {
		emitInput: function () {
			this.$emit("input", this.data);
		},
		switchScreen: function () {
			this.screen = this.isMainScreen ? "options" : "link";
		},
		validate: function () {
			let type = this.data?.type;
			if (!type || !this.linkTypes.includes(type)) {
				this.data = {
					type: this.linkTypes[0] || "url",
				};
			}
		},
	},
	created: function () {
		this.validate();
	},
	watch: {
		value: function (value) {
			this.data = Object.assign({}, value);
			this.validate();
		},
	},
};
</script>
