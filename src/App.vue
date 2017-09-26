
<!-- "HTML" BASE FILE -->

<template>
	<div id="app" class="">
		<div id="header" class="">
			<div><icon name="coffee" class="fa-icon-lg"></icon></div>
		</div>

		<!-- Menu Bar -->
		<div id="menu" 
			class="border-bottom border-bottom-fade" 
		>
			<span class="menu-option"><router-link to="/nearby">coffee nearby</router-link></span> 
			<span class="menu-option"><router-link to="/cities">explore</router-link></span>
			<span class="menu-option"><router-link to="/whats-good">social</router-link></span>
			<span class="menu-option"><a href="https://blog.findsomecoffee.com">blog</a></span> 
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app_name',
	}
</script>

<style lang="scss">
 	// Triad: http://paletton.com/#uid=5000u0kcGw03YSm85HMh-r6msmk 
 	// Mono:  http://paletton.com/#uid=1000E0kcGw03YSm85HMh-r6msmk

	// Color Scheme
	$lt-blue: 	#b7e0ed;
	$blue: 		#84C2D6;
	$dk-blue: 	#0C5C76;
	$hot-red: 	#EE2222;
	$lt-pink:  	#FFDFDF;
	$pink: 		#FF9A9A; 
	$dk-pink:	#D86161;
	$font-family-base: 'Avenir', Helvetica, Arial, sans-serif;

	body {
		font-family: $font-family-base;
		margin: 0;
		background-color: #fff;
	}
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $dk-blue;
	}

	#menu {
		background-color: $pink;
		font-weight: 500;
		font-size: 1em;
		padding: 6px 0 8px;
		text-align: center;
		vertical-align: baseline;

		span.menu-option {
			padding: 0px 10px;
			a {
				padding: 0;
			}
		}

		.router-link-active {
			border-bottom: 2px solid #fff;
		}
	}

	h1, h2 {
		color: $dk-blue;
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

		&:hover,
		&:active {
			cursor: pointer;
		}
	}

	.vue-dialog {
		.dialog-content {
			padding: .75em !important;
			div {
				margin: 0;
				padding: 2px 0;
			}

			a:hover {
				background-color: #FA00ED;
				cursor: pointer;
			}

			.dialog-c-title {
				font-size: 20px;
				padding: .1em 0;
			}

			img {
				margin: 8px 0;
				border: 1px solid #888;
				max-height: 270px;
				width: 98%;
				object-fit: cover;
			}
		}

		.dialog-buttons button {
			color: $dk-blue;
			font-size: 1.15em;
		}

		button {
			height: 42px !important;

			&:hover {
				background-color: lighten($lt-blue, 7) !important;
				transition: all 0.35s ease 0.06s;
			}
		}
	}

	.phone-link {
		color: #fff;
		font-weight: bold;
		padding: 3px 8px 1px;
		margin: 4px 0;
		border-radius: 20px;
		background-color: #B909B3;
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
		border-bottom: 1px solid $dk-blue;
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
		&:hover {
			background-color: $dk-pink;
			transition: all 0.4s ease 0s;
		}

		&:active,
		&.active {
			/*background-color: $dk-blue;*/
			background-color: $dk-pink;
		}

		&.round {
			/*background-color: #84C2D6;*/
			border-radius: 100px;
		}

		&.toggle {
			width: auto;
			height: 2.5em;
			background-color: transparent !important;
			padding: 0px;
			margin: 0px;
		}
	}
	
	button:hover.toggle {
		background-color: none;
	}

	/* COLOR PALETTE */
	/* http://paletton.com/palette.php?uid=7000A0kmtw0cHNai7DJrrtVtYnD */
	.blue {
		color: #84C2D6 !important;
		fill: #84C2D6 !important;
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

	/* ITEM LIST */
	div .star-rating {
		display: inline-block !important;
	}
	ul {
		li { 
			display: inline; 
	
			&.item {
				position: relative;
				display: inline-block;
				margin: 10px 14px 10px 10px;
				border-radius: 4px;
				width:  280px;
				height: 280px;
				background-color: transparent;
				overflow: hidden;
			}

			.thumb:hover {
				cursor: pointer;
				opacity: 0.86;
			}
		}
		&.items {
			margin-top: 8px;
			list-style-type: none;
			padding: 0;
		}
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
		position: fixed;
		z-index: 1000;
		top: 44%;
		left: 46%;
		/* Spinner size and color */
		width: 2.5rem;
		height: 2.5rem;

		/* 
		/*border-top-color: #84C2D6;
		border-left-color: $pink;
		border-bottom-color: #144F77;*/
		
		/* Triad */
		/*border-top-color: #FFC89A;
		border-left-color: $pink;
		border-bottom-color: #CD7CA8;*/

		/* Monochromatic */
		border-top-color: $pink;
		border-left-color: $dk-pink;
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
