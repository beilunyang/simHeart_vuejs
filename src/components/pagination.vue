<style>
	.pagination{
		text-align:center;
    	padding:15px 20% 0;
	}
	.prev{
		float:left;
	}
	.next{
		float:right;
	}
</style>
<template>
	<nav class="pagination">
		<a class="prev" v-if="canPrev" href="#" @click.stop.prevent="forward">上一页</a>
		<a class="next" v-if="canNext" href="#" @click.stop.prevent="backward">下一页</a>
	</nav>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				pages:pages,
			}
		},
		props:['pid'],
		methods:{
			forward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid-1
					}
				});
			},
			backward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid+1
					}
				});
			}
		},
		computed:{
			canNext:function(){
				if(this.pid<this.pages){
					return true;
				}else{
					return false;
				}
			},
			canPrev:function(){
				if(this.pid>1){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>