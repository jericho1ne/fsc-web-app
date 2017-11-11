<template>
	<div class="">
		<span 
			v-show="_self.$root.$data.loading" 
			class="fa-icon-xl spinner">
		</span>

		<ul class="juicer-feed" data-feed-id="findsomecoffee">
            <h1 class="referral"><a href="https://www.juicer.io">Powered by Juicer</a></h1>
        </ul>

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
				setTimeout(function() { 
					_self.$root.$data.loading = false;
                    $('li.feed-item.juicer.image-post').remove();
				}, 500);

                // PRERENDER SPA TRIGGER
                setTimeout(() => {
                    document.dispatchEvent(new Event('custom-post-render-event'))
                }, 6000)
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
<style lang="scss">
// Color Scheme
$lt-blue:   #b7e0ed;
$blue:      #84C2D6;
$dk-blue:   #0C5C76;
$hot-red:   #EE2222;
$lt-pink:   #FFDFDF;
$pink:      #FF9A9A; 
$dk-pink:   #D86161;

/* Hide Juicer referral tag*/
h1.referral,
div.j-poster,
.j-gallery-nav {
	display: none !important;
}
a.j-image {
	padding: 0;
}
/* Hide Juicer loading icon */
.j-loading {
	display: none !important;
}

/* Hide juicer promotional posts */
li.feed-item.juicer {
    display: none
}

/* DO NO ALLOW negative margins */
.j-stacker-wrapper {
    margin-left: 0 !important;
    margin-right: 0 !important;
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
}
/* */
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
    font-size: 16px;
    width: 98%;
    max-width: 580px;
    position: relative;
    margin: 0 auto !important;
    overflow-y: show;
    overflow-x: show;
    padding: 0;
    line-height: 1
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
    border-bottom: none;
    text-shadow: 0.05rem 0.05rem 0.025rem rgba(220,220,220,.5);
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    color: $dk-pink;
    &:hover {
        color: $pink;
    }
}
.juicer-feed.modern li.feed-item {
    padding: 0;
    margin-bottom: 20px !important;
    background: #84C2D6; 
    border-radius: 0;
    overflow: show;
    color: #fff;
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
    margin-bottom: 0 !important;
}
.juicer-feed.modern .j-meta ul {
    margin: 0;
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
    font-size: 1em;
    padding: 20px 15px 20px 20px;
}
.juicer-feed.modern .j-message {
    line-height: 1.5em;
}
.juicer-feed.modern .j-message p {
    margin: 0;
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
    margin-top: 10px
}
.juicer-feed .j-meta a {
    color: #fff
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
.j-poster {
    overflow: show;
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
