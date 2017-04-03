<template>
	<div id="app" class="border-blk">
		<h4>App.vue</h4>
		<!-- <img src="./assets/img/logo.png"> -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app_name'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.border-dev {
		border: 1px solid pink;
	}
	.border-blk {
		border: 1px solid gray;
	}

</style>
