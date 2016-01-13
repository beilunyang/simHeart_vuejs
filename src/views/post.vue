<style>
	.post{
		width:60%;
		margin:0 auto;
		margin-top:35px;
	}
	.post-title{
		text-align:center;
	}
</style>

<template>
	<my-header></my-header>
	<div class="post">
		<h2 class="post-title">{{post_info.title}}</h2>
		<div class="mardown-content">
			{{{post_info.html}}}
		</div>
	</div>
	<my-footer></my-footer>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				post_info:''
			}
		},
		ready:function(){
			var that = this;
			$.get(ghost.url.api('posts/slug/'+that.$route.params.slug),{fields:'title,html,author,updated_at'})
			.done(function(data){
				that.post_info = data.posts[0];
			})
			.fail(function(err){
				console.log(err);
			});
		},
		components:{
			'mySection':require('../components/section.vue'),
			'myHeader':require('../components/header.vue'),
			'myFooter':require('../components/footer.vue')
		}
	}
</script>