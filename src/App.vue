
<!-- "HTML" BASE FILE -->

<template>
	<div id="app" class="">
		<div id="header" class="">
			<div><icon name="coffee" class="fa-icon-md blue-80"></icon></div>
			<!-- <div><span class="blue-90">Find Some Coffee</span></div> -->
		</div>

		<!-- Menu Bar -->
		<div id="menu" 
			class="border-bottom border-bottom-fade pad2" 
		>
			<span class="menu-option">
				<router-link to="/nearby">coffee near me</router-link>
			</span> 
			<span class="menu-option">
				<router-link to="/cities">search by city</router-link>
			</span> 
			<!-- <span class="menu-option>
				<router-link to="/about">blog</router-link>
			</span>  -->
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app_name',
	}
</script>

<style>
/* 
 	Triad: http://paletton.com/#uid=5000u0kcGw03YSm85HMh-r6msmk 
 	Mono:  http://paletton.com/#uid=1000E0kcGw03YSm85HMh-r6msmk
*/

/* 
	Color Scheme
		lt blue b7e0ed
		blue 	84C2D6
		dk blue 0C5C76 
		hot red EE2222
		lt pink FFDFDF
		pink 	FF9A9A 
		dk pink	D86161
*/

	body {
		margin: 0px;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #0C5C76;
		/*color: #0F0E2F;*/
	}

	#menu {
		background-color: #FF9A9A;
		font-weight: bold;
		font-size: .95em;
		padding: 6px 0;
		text-align: center;
		vertical-align: baseline;
	}
	#menu span.menu-option {
		letter-spacing: .01em;
		padding: 0px 10px;
	}
	#menu .router-link-active {
		border-bottom: 2px solid #fff;
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
		padding: 0px 4px;
		border-bottom: 2px solid transparent;
		color: #fff;
	}
	a:hover,
	a:active {
		cursor: pointer;
	}

	.vue-dialog .dialog-content {
		padding: .75em !important;
	}

	.vue-dialog .dialog-content div {
		margin: 0;
		padding: 2px 0;
	}
	.phone-link {
		color: #fff;
		font-weight: bold;
		padding: 3px 6px 2px 6px;
		margin: 4px 0;
		border-radius: 10px;
		background-color: #B909B3;
	}
	.vue-dialog .dialog-buttons button {
		color: #0C5C76;
		font-size: 1.15em;
	}
	.vue-dialog button {
		height: 38px !important;
	}
	.vue-dialog button:hover {
		background-color: #b7e0ed !important;
		transition: all 0.4s ease 0s;
	}

	.vue-dialog .dialog-content a:hover {
		background-color: #FA00ED;
		cursor: pointer;
	}
	.vue-dialog .dialog-content div.dialog-c-title {
		font-size: 20px;
		padding: .1em 0;
	}
	.vue-dialog .dialog-content img {
		margin: 4px 0;
		border: 1px solid #bababa;
		max-height: 270px;
		width: 100%;
		object-fit: cover;
	}

	.v--modal-overlay .v--modal-box {
		position: static !important;
		margin: 0;
		width: 100% !important;
	}

	/* General */
	hr {
		border: none;
		width: 100%;
		border-bottom: 1px solid #0C5C76;
		opacity: .25;
		margin: 20px auto;
	}
	button {
		background-color: #bbb;
		letter-spacing: 1px;
		font-size: 1em;
		font-weight: normal;
		width: 3.5em;
		height: 3.5em;
		padding: .25em;
		margin: .45em;
		color: rgb(255, 255, 255);
		text-decoration: none;
		text-transform: uppercase;
		border: none;
		display: inline-block;
		cursor: pointer;
	}
	button:hover {
		background-color: #D86161;
		transition: all 0.4s ease 0s;
	}
	button:active,
	button.active {
		/*background-color: #1A7695;*/
		background-color: #D86161;
	}
	
	button.round {
		/*background-color: #84C2D6;*/
		border-radius: 100px;
	}
	
	button.toggle {
		width: auto;
		height: 2.5em;
		background-color: transparent !important;
		padding: 0px;
		margin: 0px;
	}
	button:hover.toggle {
		background-color: none;
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
	
	/* Icons */
	.fa-icon {
		padding-top: 0.2em;
		color: #84C2D6;
	}
	.fa-icon-xs {
		width: 0.75em;
		height: 0.75em;
	}
	.fa-icon-sm {
		width: 1.25em;
		height: 1.25em; /* or any other relative font sizes */
	}
	.fa-icon-md {
		width: 1.75em;
		height: 1.75em; /* or any other relative font sizes */
	}
	.fa-icon-lg {
		width: 2.5em;
		height: 2.5em; /* or any other relative font sizes */
	}
	.fa-icon-xl {
		width: 3.25em;
		height: 3.25em; /* or any other relative font sizes */
	}

	/* BORDERS */
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

	/* PADDING / LAYOUT */
	.pad2 {
		padding: 2px;
	}
	.pad5 {
		padding: 5px;
	}
	.pad10 {
		padding: 10px;
	}

	/* ITEM LIST */
	div .star-rating {
		display: inline-block !important;
	}
	ul li { display: inline; }
	
	ul.items {
		list-style-type: none;
		padding: 0;
	}
	li.item {
		position: relative;
		display: inline-block;
		/*border: 1px solid #dedede;*/
		margin: 10px 10px 5px 10px;
		border-radius: 3px;
		width:  280px;
		height: 280px;
		background-color: transparent;
		overflow: hidden;
	}
	li .thumb:hover {
		cursor: pointer;
		opacity: 0.8;
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
		width: auto;
		color: #fff;
		background-color: #84C2D6;
		padding: 2px;
		opacity: 1;
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


	/* Pure CSS spinner*/
	.spinner {
		position: absolute;
		z-index: 1000;
		top: 44%;
		left: 46%;
		/* Spinner size and color */
		width: 2.5rem;
		height: 2.5rem;

		/* 
		/*border-top-color: #84C2D6;
		border-left-color: #FF9A9A;
		border-bottom-color: #144F77;*/
		
		/* Triad */
		/*border-top-color: #FFC89A;
		border-left-color: #FF9A9A;
		border-bottom-color: #CD7CA8;*/

		/* Monochromatic */
		border-top-color: #FF9A9A;
		border-left-color: #D86161;
		border-bottom-color: #B23535;
		
		/* Additional spinner styles */
		animation: spinner 1080ms linear infinite;
		border-right-color: transparent;
		border-style: solid;
		border-width: 5px;
		border-radius: 50%;  
		box-sizing: border-box;
		display: inline-block;
		vertical-align: middle;
	}
	/* Animation styles */
	@keyframes spinner {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	.spinner-slow {
		animation: spinner 1s linear infinite;
	}
</style>
