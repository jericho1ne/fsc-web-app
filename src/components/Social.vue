<template>
	<div class="">

		<ul class="juicer-feed" data-feed-id="findsomecoffee"></ul>

	</div>
</template>

<script>
export default {
	name: 'About',
	data () {
		return {
			
		}
	},
	created: function () {
		this.$root.loadScript('//assets.juicer.io/embed.js')
			.then(function() {
				// console.log('script loaded.');
			});   
	}, 
	mounted: function () {
		// 
	},
	
	methods: {		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	/* Copy only needed styles from //assets.juicer.io/embed.css instead! */
	ul.items {
		list-style-type: none;
		padding: 0;
	}

	li.item {
		position: relative;
		display: inline-block;
		border: 1px solid #dedede;
		margin: 0px 20px 20px 0px;
		border-radius: 4px;
		width: 200px;
		height: 200px;
		background-color: #fafafa;
		overflow: hidden;
	}
	li .thumb:hover {
		cursor: pointer;
	}
	.thumb {
		top: 0px;
		height: 100%;
		background-position: left top;
		background: no-repeat;
		background-size: cover;
	}
	.item-title {
		min-height: 15%;
		height: auto;
		background-color: #fff;
		padding: 2px 6px;
		opacity: 0.9;
	}
	.thumb-spacer {
		height: auto;
	}
	.mini-action-bar {
		position: absolute;
		bottom: -2px;
		margin-left: 35%;
		text-align: center;
		opacity: 0.95;
		padding: 0px;
		height: auto;
		color: #fff;
	}
	a {
		color: #42b983;
	}
</style>
