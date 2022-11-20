<template>
	<k-grid>
		<k-column v-if="showSelect" :width="uiWidth.select">
			<k-select-field
				type="select"
				:value="linkType"
				:options="linkTypeOptions"
				:empty="false"
				@input="handleTypeSelect"
			/>
		</k-column>

		<k-column :width="uiWidth.field">
			<k-url-field
				v-if="linkType === 'url'"
				:value="linkValue"
				@input="handleValueInput"
				placeholder="https://example.com/"
			/>

			<k-pages-field
				v-else-if="linkType === 'page'"
				v-bind="pages"
				:value="linkValue"
				:endpoints="{
					field: this.endpoints.field + '/link-pages',
				}"
				@input="handleValueInput"
			></k-pages-field>

			<k-files-field
				v-else-if="linkType === 'file'"
				v-bind="files"
				:value="linkValue"
				:endpoints="{
					field: this.endpoints.field + '/link-files',
				}"
				@input="handleValueInput"
			></k-files-field>

			<k-email-field
				v-else-if="linkType === 'email'"
				:value="linkValue"
				@input="handleValueInput"
			/>

			<k-tel-field
				v-else-if="linkType === 'tel'"
				:value="linkValue"
				@input="handleValueInput"
			/>

			<k-box
				v-else
				theme="negative"
				:text="$t('error.type', { type: linkType })"
			/>
		</k-column>
	</k-grid>
</template>

<script>
export default {
	props: {
		value: Object,
		endpoints: Object,
		width: String,

		linkTypes: Array,
		pages: Object,
		files: Object,
	},
	computed: {
		linkType() {
			return this.value.type;
		},
		linkValue() {
			return this.value.value;
		},
		showSelect() {
			return this.linkTypeOptions.length > 1;
		},
		widthPercent() {
			let split = this.width.split("/");
			let numerator = split[0] || 1;
			let denominator = split[1] || 1;
			return (numerator / denominator) * 100;
		},
		uiWidth() {
			let isLarge = this.widthPercent >= 50;
			return {
				select: isLarge ? "1/4" : "1/1",
				field: this.showSelect ? (isLarge ? "3/4" : "1/1") : null,
			};
		},
		linkTypeOptions() {
			return this.linkTypes.map((type) => ({
				value: type,
				text: this.$t(type),
			}));
		},
	},
	methods: {
		handleTypeSelect(value) {
			// Update the type, but also unset the value.
			this.$emit("input", { type: value, value: undefined });
		},
		handleValueInput(value) {
			this.$emit("input", { value });
		},
	},
};
</script>

<style scoped>
:deep(.k-field-header) {
	display: none; /* hides the Select buttons */
}
</style>
