
<!-- "HTML" BASE FILE -->

<template>
	<div id="app" class="border-dark">
		<div id="header" class="">
			<div><icon name="coffee" class="fa-icon-xl blue-80"></icon></div>
			<!-- <div><span class="blue-90">Find Some Coffee</span></div> -->
		</div>

		<!-- Menu Bar -->
		<div id="menu" 
			class="border-bottom border-bottom-fade pad2" 
			style="background-color: #FF9A9A"
		>
			<h3>
				<router-link to="/nearby">near me</router-link>
				<icon name="circle" class="fa-icon-xs"></icon> 
				<router-link to="/cities">by city</router-link>
			
				<!-- <icon name="circle" class="fa-icon-xs"></icon> -->
				<!-- <a v-link="{path: '/about'}">about</a>  -->
			</h3>
		</div>
		
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
		color: #0C5C76;
		/*color: #0F0E2F;*/
	}
	h1, h2 {
		color: #1A7695;
		font-weight: normal;
		margin: 1.5em;
	}
	h3, h4 {
		font-weight: bold;
		margin: 0.25em;
	}
	h5 {
		font-weight: normal;
		margin: 0.25em;
	}
	a {
		text-decoration: none;
		padding: 2px 10px;
		border-radius: 4px;
		color: #fff;
	}
	a:hover {
		background-color: #EE2222;
		cursor: pointer;
	}
	button {
		/*font-family: Arial;*/
		letter-spacing: 2px;
		font-size: 1em;
		font-weight: normal;
		padding: 8px 14px;
		margin: 8px;
		color: rgb(255, 255, 255);
		text-decoration: none;
		text-transform: uppercase;
		text-shadow: #0C5C76 0px 1px 2px;
		width: auto;
		background-color: #84C2D6;
		border-radius: 14px;
		border: none;
		display: inline-block;
		cursor: pointer;
	}
	button:hover {
		background-color: #EE2222;
	}
	button:active {
		background-color: #1A7695;
	}
	/* COLOR PALETTE */
	/* http://paletton.com/palette.php?uid=7000A0kmtw0cHNai7DJrrtVtYnD */
	.green-80 {
		color: #8DE98D !important;
	}
	.blue-80 {
		color: #84C2D6 !important;
		fill: #84C2D6 !important;
	}
	.blue-90 {
		color: #54A0B9 !important;
		fill: #54A0B9 !important;
	}
	.blue-100 {
		color: #34849F !important;
		fill: #34849F !important;
	}
	.blue-110 {
		color: #1A7695 !important;
		fill: #1A7695 !important;
	}
	.blue-120 {
		color: #0C5C76 !important;
		fill: #0C5C76 !important;
	}

	.pink-80 {
		color: #FF9A9A !important;
		fill: #FF9A9A !important;
	}
	.pink-90 {
		color: #FF6F6F !important;
		fill: #FF6F6F !important;
	}
	.pink-100 {
		color: #FF4C4C !important;
		fill: #FF4C4C !important;
	}
	.pink-110 {
		color: #EE2222 !important;
		fill: #EE2222 !important;
	}
	.pink-120 {
		color: #BC0C0C !important;
		fill: #BC0C0C !important;
	}
	
	.fa-icon {
		color: #84C2D6;
	}
	.fa-icon-xs {
		width: 12px;
		height: 12px;
	}
	.fa-icon-sm {
		width: 14px;
		height: 14px; /* or any other relative font sizes */
	}
	.fa-icon-md {
		width: 20px;
		height: 20px; /* or any other relative font sizes */
	}
	.fa-icon-lg {
		width: 30px;
		height: 30px; /* or any other relative font sizes */
	}
	.fa-icon-xl {
		width: 80px;
		height: 80px; /* or any other relative font sizes */
	}
	.border-dev {
		border: 1px solid pink;
	}
	.border-dark {
		border: 1px solid #ddd;
		border-radius: 3px;
	}
	.border-bottom {
		border-bottom: 1px solid #ccc;
		border-radius: 0px;
		
	}
	.border-bottom-fade {
		box-shadow: 0 3px 2px -2px #dedede;
	}
	.bg-gray {
		background-color: #eee;
	}
	.pad2 {
		padding: 2px;
	}
	.pad5 {
		padding: 5px;
	}
	.pad10 {
		padding: 10px;
	}
</style>
