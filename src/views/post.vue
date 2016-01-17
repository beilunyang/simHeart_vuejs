<style>
	.post{
		width:60%;
		margin:0 auto;
		margin-top:35px;
		margin-bottom:100px;
		min-height: 400px;
	}
	.post-title{
		text-align:center;
	}
	.post-time{
		text-align: center;
		margin-bottom: 20px;
	}
	.markdown-body{
		margin-bottom:60px;
	}
</style>

<template>
	<div class="post">
		<loading :showload='showload'></loading>
		<h2 class="post-title">{{post_info.title}}</h2>
		<div class="post-time">-- {{post_info.updated_at}} --</div>
		<div class="markdown-body">
			{{{post_info.html}}}
		</div>
		<my-comment :post_info='post_info'></my-comment> 
	</div>
</template>

<script>
	require('../style/github-markdown.css');
	module.exports = {
		data:function(){
			return{
				post_info:'',
				showload:true
			}
		},
		ready:function(){
			var that = this;
			$.get(ghost.url.api('posts/'+that.$route.params.id),{fields:'title,html,updated_at,id,url'})
			.done(function(data){
				that.showload = false;
				var tmp_post = data.posts[0];
				tmp_post.updated_at = tmp_post.updated_at.split('T')[0];
				that.post_info = tmp_post;
			})
			.fail(function(err){
				console.log(err);
			});
		},
		components:{
			'loading':require('../components/loading.vue'),
			'myComment':require('../components/comment.vue')
		}
	}
</script>