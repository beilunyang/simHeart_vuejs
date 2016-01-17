<style>
	.notfind{
	   padding: 50px 20%;
       text-align: center;
	}
	.notfind a{
		font-size:15px;
		color:blue;
		text-decoration:underline;
	}
</style>
<template>
	<div class="notfind">
		<p>404 not found page!<br>
			<span id="c">5</span>秒后将自动跳转到首页O(∩_∩)O~
		</p>
		<a v-link="'/'">直接跳转</a>
	</div>
</template>
<script>
	module.exports = {
		ready:function(){
			var c = document.getElementById('c');
			var t = 5;
			var count = setInterval(function(){
				if(t==0){
					clearInterval(count);
					route.go('/');
				}
				c.innerText = --t;
			},1000);
		}
	}
</script>

