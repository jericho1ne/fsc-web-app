<template>
	<div id="app" class="border-dark">
		<div id="header" class="pad10">
			<div><icon name="coffee" class="fa-icon-xl blue-90"></icon></div>
			<div><span class="blue-90">Find Some Coffee</span></div>
		</div>

		<!-- Menu Bar -->
		<div id="menu" 
			class="border-bottom border-bottom-fade pad2" 
			style="background-color: #FF9A9A"
		>
			<h3>
				<a href="">nearby</a> 
					<icon name="circle" class="fa-icon-xs"></icon> 
				<a href="">cities</a> 
					<icon name="circle" class="fa-icon-xs"></icon>
				<a href="">about</a>
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
		color: #bde2ee;
	}
	.fa-icon-xs {
		width: auto;
		height: .5em;
	}
	.fa-icon-sm {
		width: auto;
		height: 1em; /* or any other relative font sizes */
	}
	.fa-icon-md {
		width: auto;
		height: 1.5em; /* or any other relative font sizes */
	}
	.fa-icon-lg {
		width: auto;
		height: 3.5em; /* or any other relative font sizes */
	}
	.fa-icon-xl {
		width: auto;
		height: 6em; /* or any other relative font sizes */
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
