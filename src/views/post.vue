<style>
	.post{
		width:60%;
		margin:0 auto;
		margin-top:35px;
		min-height: 400px;
	}
	.post-title{
		text-align:center;
	}
</style>

<template>
	<div class="post">
		<loading :showload='showload'></loading>
		<h2 class="post-title">{{post_info.title}}</h2>
		<div class="markdown-body">
			{{{post_info.html}}}
		</div>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				post_info:'',
				showload:true
			}
		},
		ready:function(){
			var that = this;
			$.get(ghost.url.api('posts/slug/'+that.$route.params.slug),{fields:'title,html,author,updated_at'})
			.done(function(data){
				that.showload = false;
				that.post_info = data.posts[0];
			})
			.fail(function(err){
				console.log(err);
			});
		},
		components:{
			'loading':require('../components/loading.vue')
		}
	}
</script>