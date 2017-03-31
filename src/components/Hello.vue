



<!-- TUTORIAL HERE: -->

<!-- https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2 -->

<template>
	<div class="hello border-dev">
		<h1>{{ msg }}</h1>
		<h2>{{ msg2 }}</h2>
		<h3>Essential Links</h3>
		<ul>
		  <li><a href="#" target="_blank">Link 1</a></li>
		  <li><a href="#" target="_blank">Link 2</a></li>
		  <br>
		</ul>

		<!-- Coffee shops display here -->
		<div class="list-group">
			<!-- <li v-repeat="items">
		    	{{name}} {{rating}}
		  	</li> -->
		  	<li v-for="item in items">
	         	{{item.name}} {{item.rating}}
	        </li>
		</div>
			<!--
			<a href="#" class="list-group-item" 
				v-repeat="item in coffeeshops">
			<h4 class="list-group-item-heading">
				<i class="glyphicon glyphicon-bullhorn"></i> 
					{{ item.name }}
			</h4>

			<h5>
				<i class="glyphicon glyphicon-calendar" 
					v-if="item.rating"></i>{{ item.rating }}
			</h5>

			<p class="list-group-item-text" 
				v-if="item.review_count">{{ item.review_count }} reviews</p>

			<button class="btn btn-xs btn-danger" 
				v-on="click: deleteItem($index)">Delete</button>
			</a> 
			-->
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'Find Some Coffee',
			msg2: 'nearby:',
			//item: { name: '', rating: '', review_count: '' },
			items: [
				{ name: 'Refinery', rating: '5', review_count: '200' },
				{ name: 'Metropolis', rating: '3', review_count: '10' }
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
