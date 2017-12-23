<template>
	<div id="aboutPage">
		<h2>About FindSomeCoffee</h2> 

		<div class="pad-top-4">
            <hr>
            We have an <a href="https://itunes.apple.com/us/app/find-some-coffee/id1316428363?mt=8">iOS mobile app</a><br>
            Also, an <a href="https://play.google.com/store/apps/details?id=com.apps.fndsmcoffee">Android mobile app</a>
        </div>
        <div class="pad-top-4">
            <hr>
            We have a <a href="https://blog.findsomecoffee.com">blog</a> where we review the best coffee shops in Los Angeles</h1>
        </div>
        <div class="pad-top-4">
            <hr>
            And we have an email where you can ask us questions: 
            <a href="mailto:findsomecoffee@gmail.com">findsomecoffee@gmail</a>
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
		let _self = this;
	
        // PRERENDER SPA TRIGGER
        setTimeout(() => {
            document.dispatchEvent(new Event('custom-post-render-event'))
        }, 1000)
                  
	}, 
	mounted: function () {
	},
	
	methods: {		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// Color Scheme
$lt-blue:   #53C1CC;
$blue:      #53C1CC;
$dk-blue:   #0C5C76;
$hot-red:   #EE2222;
$lt-pink:   #FFDFDF;
$pink:      #FF9A9A; 
$dk-pink:   #D86161;

a {
    font-weight: bold;
    color: $dk-pink;
    padding: 0 2px;
    &:hover, &:focus {
        color: lighten($dk-pink, 10);
    }
}

#aboutPage div {
    padding: 0 30px;
}
</style>
