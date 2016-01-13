<style>
	.container{
		padding-bottom:100px;
	}
</style>
<template>
	<my-header></my-header>
	<div class="container">
		<my-section></my-section>
	</div>
	<my-footer></my-footer>
</template>

<script>
	module.exports = {
		components:{
			'mySection':require('../components/section.vue'),
			'myHeader':require('../components/header.vue'),
			'myFooter':require('../components/footer.vue')
		}
	}
</script>