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
import LinkSelect from "./LinkSelect.vue";
import LinkSettings from "./LinkSettings.vue";

export default {
	components: {
		LinkSelect,
		LinkSettings,
	},
	props: {
		value: {
			type: Object,
			default: function () {
				// If the field is inside a Structure, it'll have an `undefined` initial
				// value, so this gives a valid default value.
				return {
					type: "url",
					value: undefined,
				};
			},
		},
		endpoints: Object,

		width: String,
		label: String,
		help: String,
		disabled: Boolean,
		required: Boolean,

		options: Array,
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
			return this.settings !== false;
		},
	},
	methods: {
		emitInput: function () {
			this.$emit("input", this.data);
		},
		switchScreen: function () {
			this.screen = this.isMainScreen ? "options" : "link";
		},
	},
	watch: {
		value: function (value) {
			this.data = Object.assign({}, value);
		},
	},
};
</script>
