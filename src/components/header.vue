<style>
	header{
		text-align: center;
		padding-top:80px;
	}
	.avatar{
		height:150px;
		width:150px;
		margin:0 auto;
		-webkit-border-radius:50%;
		-moz-border-radius:50%;
		border-radius:50%;
	}
	.navbar	ul{
		font-size:0;
	}
	.navbar li{
		font-size:18px;
		min-width:80px;
		display:inline-block;
		text-align: center;
		padding-bottom:1px;
		margin-bottom:5px;
	}
	.navbar li:hover{
		border-bottom:1px dotted;
		padding-bottom:0;
	}
</style>

<template>
	<header>
		<div class="avatar" :style="'background:url('+blog_avatar+') center center no-repeat;background-size:cover;'"></div>
		<p>--{{ blog_name }}--</p>
		<nav class="navbar">
			<ul>
				<li><a href="/">首页</a></li>
				<template v-for="tag in blog_tags">
					<li><a :href="'#!/category/' + tag.slug">{{ tag.name }}</a></li>
				</template>
			</ul>
		</nav>
	</header>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				blog_name:'悖论の小黑屋',
				blog_avatar:'https://dn-bitibiti.qbox.me/image/a/09/dbac352b079af7f8edafd7d978afe.jpg',
				blog_tags:''
			}
		},
		ready:function(){
			var that = this;
			$.get(ghost.url.api('tags',{fields:'name,slug'}))
				.done(function(data){
					that.blog_tags = data.tags;
				})
				.fail(function(err){
					console.log(err);
				});
		}

	}
</script>