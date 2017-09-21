<template>
	<div class="">
		<span 
			v-show="_self.$root.$data.loading" 
			class="fa-icon-xl spinner">
		</span>

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
		let _self = this;
		// Turn on spinner
		_self.$root.$data.loading = true;

		this.$root.loadScript('//assets.juicer.io/embed.js')
			.then(function() {
				// Turn off spinner after a bit more animation 
				setTimeout(function(){ 
					_self.$root.$data.loading = false;
				}, 500);
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
<style>
/* Hide Juicer referral tag*/
h1.referral,
div.j-poster {
	display: none !important;
}
a.j-image {
	padding: 0;
}
/* Hide Juicer loading icon */
.j-loading {
	display: none !important;
}

/* JUICER EMBED */
.j-instagram {
    background: #3F729B
}
.j-instagram:before {
    content: ""
}
@font-face {
    font-family: "fontawesome-webfont";
    src: url(//assets.juicer.io/fonts/fontawesome-webfont.eot);
    src: url(//assets.juicer.io/fonts/fontawesome-webfont.eot?#iefix) format("embedded-opentype"), url(//assets.juicer.io/fontawesome-webfont-adbc4f95eb6d7f2738959cf0ecbc374672fce47e856050a8e9791f457623ac2c.woff) format("woff"), url(//assets.juicer.io/fontawesome-webfont-ae19e2e4c04f2b04bf030684c4c1db8faf5c8fe3ee03d1e0c409046608b38912.ttf) format("truetype"), url(//assets.juicer.io/fontawesome-webfont-e0d04e3fed3df6f5d84bc45d9b96279e7177b1b8c3d18d567af75af5997ff73b.svg#fontawesome-webfont) format("svg");
    font-weight: normal;
    font-style: normal
}
.juicer-feed h1.referral a:after {
    text-indent: -9999px;
    display: block;
    background-repeat: no-repeat;
    background-image: url(//assets.juicer.io/embed-se36aebe323-e0ef2ff1ddf423c2dfefd7363696ac52ad6638ddbd5ffcd57685ab008b1fdf4a.png)
}
@media (-webkit-min-device-pixel-ratio: 2),
(-o-min-device-pixel-ratio: 3 / 2),
(min-device-pixel-ratio: 2) {
    .juicer-feed h1.referral a:after {
        background-image: url(//assets.juicer.io/embed-retina-s4adc3db9d6-b061af77b3ed4a4ec0703b225dd33167df8aa5fbb21b7eefd38faba85b861696.png)
    }
}
.juicer-feed {
    *zoom: 1;
    -moz-transition: opacity 0.2s ease-in-out;
    -o-transition: opacity 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    position: relative;
    margin: 0 auto !important;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    line-height: 1.4
}
.juicer-feed:after {
    content: "";
    display: table;
    clear: both
}
.juicer-feed .j-stacker {
    display: table;
    table-layout: fixed;
    width: 100%
}
.juicer-feed .j-stacker>* {
    display: table-cell !important;
    vertical-align: top;
    float: none !important
}
.juicer-feed * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}
.juicer-feed.loaded {
    visibility: visible;
    opacity: 1
}
.juicer-feed a {
    text-decoration: none !important;
    border-bottom: none
}
.juicer-feed h1.referral {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    margin: 0 auto 30px;
    text-align: center;
    display: block;
    white-space: nowrap
}
.juicer-feed h1.referral a {
    color: #f05a4b;
    display: inline-block
}
.juicer-feed h1.referral a:after {
    height: 25px;
    width: 14px;
    background-position: 100% -64px;
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    position: relative;
    top: -1px
}
@media (-webkit-min-device-pixel-ratio: 2),
(-o-min-device-pixel-ratio: 3 / 2),
(min-device-pixel-ratio: 2) {
    .juicer-feed h1.referral a:after {
        background-position: 100% -128px;
        -moz-background-size: 14px auto;
        -o-background-size: 14px auto;
        -webkit-background-size: 14px auto;
        background-size: 14px auto;
        background-position: 100% -64px
    }
}
.juicer-feed.modern li.feed-item {
    opacity: 0
}
.juicer-feed.modern li.feed-item {
    padding: 10px;
    background: white;
    color: #3A3A3A;
    margin-bottom: 5%;
    border-color: #e5e5e5;
    border-style: solid;
    border-width: 0 1px 1px 0;
    white-space: normal;
    float: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
}
.juicer-feed.modern li.feed-item .j-message a {
    font-weight: bold
}
.juicer-feed.modern img {
    width: 100%;
    margin-bottom: 10px
}
.juicer-feed.modern .j-meta ul {
    margin: 0;
    padding: 0
}
.juicer-feed.modern li.feed-item {
    padding: 0
}
.juicer-feed.modern .j-poster {
    padding: 14px 10px 12px;
    height: auto;
    margin: 0;
    height: 56px
}
.juicer-feed.modern .j-poster img,
.juicer-feed.modern .j-poster h3 {
    margin-bottom: 0
}
.juicer-feed.modern .j-poster img {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border-color: white;
    margin: 0 11px 0 0;
    height: 30px
}
.juicer-feed.modern .j-poster h3 {
    margin: 6px 0 0 0
}
.juicer-feed.modern .j-poster h3,
.juicer-feed.modern .j-poster .j-date {
    font-size: 12px
}
.juicer-feed.modern .j-poster .j-date {
    margin-top: 7px
}
.juicer-feed.modern .j-image img {
    margin-bottom: 0
}
.juicer-feed.modern .j-text {
    font-size: 14px;
    padding: 20px 15px 20px 20px
}
.juicer-feed.modern .j-message {
    color: #666;
    line-height: 25px
}
.juicer-feed li.feed-item {
    position: relative;
    width: 100%;
    text-align: left;
    margin: 0;
    list-style-type: none;
    display: block
}
.juicer-feed li.feed-item:before {
    content: ''
}
.juicer-feed .j-meta {
    margin-top: 25px
}
.juicer-feed .j-meta a {
    color: #bababa
}
.juicer-feed .j-meta a:hover {
    color: #F17E6F
}
.juicer-feed .j-meta ul {
    display: inline-block;
    width: auto !important;
    padding: 0;
    margin: 0;
    font-size: 1em;
    line-height: 1em;
    float: none
}
.juicer-feed .j-meta li {
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 0;
    background-image: none;
    border: none;
    font-size: 1em;
    font-weight: normal;
    height: auto;
    width: auto
}
.juicer-feed .j-meta li:last-of-type {
    margin-right: 0
}
.juicer-feed .j-meta nav {
    display: inline-block;
    float: right;
    border: none;
    background: transparent;
    position: relative;
    width: auto;
    height: auto
}
.juicer-feed .j-meta a {
    background: transparent;
    width: auto;
    height: auto;
    float: none
}
.juicer-feed .j-meta a.j-social {
    font-size: 1.5em;
    line-height: 1;
    float: none;
    margin: 0
}
.juicer-feed .j-meta a:before {
    font-family: "fontawesome-webfont", Helvetica, Arial, sans-serif;
    font-size: 1em;
    margin-right: 5px
}
.juicer-feed .j-meta a.comments:before {
    content: '\f086'
}
.juicer-feed .j-meta a.heart:before {
    content: '\f004'
}
.juicer-feed a {
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    color: #3A3A3A
}
.juicer-feed a:hover {
    color: #F17E6F
}
.j-poster {
    overflow: hidden;
    *zoom: 1;
    margin: 0 0 10px 0;
    height: 30px
}
.j-poster img {
    float: left;
    width: 30px !important;
    margin: 0 7px 0 0;
    padding: 0
}
.j-poster a {
    color: #3A3A3A
}
.j-poster a:hover {
    color: #F17E6F
}
.j-poster h3 {
    float: left;
    margin: 4px 0 0 0;
    padding: 0;
    font-size: 14px;
    font-weight: bold;
    max-width: 67%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    clear: none;
    color: #3A3A3A;
    line-height: 20px
}
.j-poster .j-date {
    float: right;
    font-size: 14px;
    margin-top: 4px;
    color: #a0a0a0
}
.juicer-feed .j-instagram {
    background: #3F729B
}
.juicer-feed .j-instagram:before {
    content: ""
}

</style>
