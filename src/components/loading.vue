<style>
	@-webkit-keyframes loading{
		0%{
			opacity:1;
			width:0;
			height:0;
		}
		70%{
			opacity: .5;
			width:40px;
			height:40px;
		}
		100%{
			opacity:0;
			width:70px;
			height:70px;
		}
	}
	@-o-keyframes loading{
		0%{
			opacity:1;
			width:0;
			height:0;
		}
		70%{
			opacity: .5;
			width:40px;
			height:40px;
		}
		100%{
			opacity:0;
			width:70px;
			height:70px;
		}
	}
	@-moz-keyframes loading{
		0%{
			opacity:1;
			width:0;
			height:0;
		}
		70%{
			opacity: .5;
			width:40px;
			height:40px;
		}
		100%{
			opacity:0;
			width:70px;
			height:70px;
		}
	}
	@keyframes loading{
		0%{
			opacity:1;
			width:0;
			height:0;
		}
		70%{
			opacity: .5;
			width:40px;
			height:40px;
		}
		100%{
			opacity:0;
			width:70px;
			height:70px;
		}
	}
	.loading{
		position:absolute;
		left:50%;
		top:70%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		background-color: #ccc;
		animation:loading .8s infinite;
		-webkit-animation:loading .8s infinite;
		-moz-animation:loading .8s infinite;
		-o-animation:loading .8s infinite;
	}
</style>

<template>
	<div class="loading" v-if="showload"></div>
</template>

<script>
	module.exports = {
		props:['showload']
	}
</script>