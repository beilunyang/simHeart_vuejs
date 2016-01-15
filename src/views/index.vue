<style>
	.container{
		padding-bottom:100px;
		min-height: 200px;
	}
</style>
<template>
	<div class="container">
		<my-section :posts='posts'></my-section>
		<my-pagination :pid='pid'></my-pagination>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				pid:'',
				posts:''
			}
		},
		components:{
			'mySection':require('../components/section.vue'),
			'myPagination':require('../components/pagination.vue')
		},
		route:{
			data:function(transition){
				 var tmp_id = transition.to.params.id?transition.to.params.id:1;
				 $.get(ghost.url.api('posts',{fields:'title,image,slug,meta_description',limit:'5',page:tmp_id}))
					.done(function(data){
						transition.next({pid:parseInt(tmp_id,10),posts:data.posts});
					})
					.fail(function(err){
						console.log(err);
					});
			}
		}
	}
</script>