<template>
	<div class="k-structure-form">
		<section>
			<k-form
				class="k-structure-form-fields"
				v-model="data"
				:fields="fields"
				@input="$emit('input', data)"
			/>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		value: Object,
		types: [Object, Boolean],
	},
	data: function () {
		return {
			data: this.value,
		};
	},
	computed: {
		fields: function () {
			var value = {};
			var fields = {
				text: {
					width: "1/2",
					type: "text",
					label: this.$t("label.text"),
				},
				popup: {
					width: "1/4",
					type: "toggle",
					label: this.$t("label.popup"),
				},
				hash: {
					width: "1/4",
					type: "text",
					label: this.$t("label.fragment"),
					placeholder: this.$t("placeholder.elementid"),
				},
			};

			// Merge defaults with defined fields in their order.
			for (var k in this.types) {
				if (fields[k] && this.types[k]) {
					value[k] = Object.assign(fields[k], this.types[k]);
				}
			}

			// Add any missing default fields that are not explicitly disabled.
			for (var k in fields) {
				if (!value[k] && this.types[k] !== false) {
					value[k] = fields[k];
				}
			}

			return value;
		},
	},
	watch: {
		value: function (value) {
			Object.assign(this.data, value);
		},
	},
};
</script>
