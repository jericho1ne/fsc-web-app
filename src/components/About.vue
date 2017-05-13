<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="list-group">
			<ul class="items">
				
			</ul>
		</div>
			
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
		console.log(` ** ${this.$options.name} ** created `);
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} ** mounted `);
		var self = this;
	},
	
	methods: {		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
