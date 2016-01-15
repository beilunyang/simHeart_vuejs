<style>
	section{
		padding:40px 18% 0;
	}
	section h2{
		text-align:center;
		padding:0 20px;
	}
	section a,section article{
		word-wrap: break-word;
		word-break: break-all;
	}
	.division{
		text-align: center;
		border-bottom:1px dotted #ccc;
		padding-bottom:20px;
	}
	.cover img{
		-webkit-border-radius: .5em;
		-moz-border-radius: .5em;
		border-radius: .5em;
		max-width:100%;
		margin:0 auto;
		margin-bottom:20px;
	}
</style>
<template>
	<template v-for="post in posts">
		<section>
			<h2><a v-link="{name:'post',params:{slug:post.slug}}">{{ post.title }}</a></h2>
			<template v-if="post.image">
				<div class="cover">
					<img :src="post.image">
				</div>
			</template>
			<article>
				{{ post.meta_description }}
			</article>
			<p class="division"><a v-link="{name:'post',params:{slug:post.slug}}">--阅读全文--</a></p>
		</section>
	</template>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				posts:'',
				pid:''
			}
		},
		ready:function(){
			var that = this;
			that.pid = that.$route.params.id?this.$route.params.id:1;
			$.get(ghost.url.api('posts',{fields:'title,image,slug,meta_description',limit:'3',page:pid}))
			.done(function(data){
				that.posts = data.posts;
			})
			.fail(function(err){
				console.log(err);
			});
		}
	}
</script>
<!-- ready 无法多次执行，无法再次获取到文章 
	 直接改变hash指示,有错误。（如：从第二页之前从地址栏变到第一页时,上一页仍旧存在）
-->