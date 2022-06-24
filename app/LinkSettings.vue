<template>
	<div class="k-structure-form">
		<section>
			<k-form
				class="k-structure-form-fields"
				v-model="data"
				:fields="settings"
				@input="$emit('input', data)"
			/>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		value: Object,
		settings: Object,
	},
	data: function () {
		return {
			data: this.value,
		};
	},
	created: function () {
		for (let fieldName in this.settings) {
			for (let option in this.settings[fieldName]) {
				let value = this.settings[fieldName][option];
				if (typeof value !== "string" || value[0] !== "$") continue;
				this.settings[fieldName][option] = this.$t(value.substr(1));
			}
		}
	},
	watch: {
		value: function (value) {
			Object.assign(this.data, value);
		},
	},
};
</script>
