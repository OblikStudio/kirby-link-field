<template>
	<k-field v-bind="$props" class="k-link-field">
		<k-button
			slot="options"
			v-if="settings"
			:icon="isMainScreen ? 'cog' : 'cancel'"
			@click="screen = isMainScreen ? 'options' : 'link'"
		>
			{{ isMainScreen ? $t("label.settings") : $t("label.close") }}
		</k-button>

		<LinkSelect
			v-if="isMainScreen"
			:value="validValue"
			:width="width"
			:required="required"
			:endpoints="endpoints"
			:linkTypes="linkTypes"
			:pages="pages"
			:files="files"
			@input="handleInput"
		></LinkSelect>
		<LinkSettings
			v-else
			:value="validValue"
			:settings="settings"
			@input="handleInput"
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
		value: [Object, String],
		endpoints: Object,

		width: String,
		label: String,
		help: String,
		disabled: Boolean,
		required: Boolean,

		linkTypes: Array,
		settings: Object,
		pages: Object,
		files: Object,
	},
	data: function () {
		return {
			screen: "link",
		};
	},
	computed: {
		validValue() {
			if (!this.value || !this.linkTypes.includes(this.value.type)) {
				return { type: this.linkTypes[0] };
			}

			return { ...this.value };
		},
		isMainScreen: function () {
			return this.screen === "link";
		},
	},
	methods: {
		handleInput(value) {
			this.$emit("input", { ...this.validValue, ...value });
		},
	},
};
</script>
