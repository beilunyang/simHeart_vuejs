
<template>
	<div class="container">
		<my-section></my-section>
		<my-pagination></my-pagination>
	</div>
</template>

<script>
	module.exports = {
		components:{
			'mySection':require('../components/section.vue'),
			'myPagination':require('../components/pagination.vue')
		}
	}
</script>