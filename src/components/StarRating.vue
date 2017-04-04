<template>
	<star-rating
		v-bind:increment="0.5"
		v-bind:max-rating="5"
		inactive-color="#ccc"
		active-color="#333"
		v-bind:star-size="90"
	>
	</star-rating>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
	components: {
		StarRating
	},
}
</script>

<style>
.star-rating {
	display: block !important;
}
</style>
