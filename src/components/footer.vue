<style>
	
</style>

<template>
	<footer>
		<template v-if="friends">
			<div class="jiyou">
				<ul>
					<li>友情链接:</li>
					<template v-for="friend in friends">
						<li>
							<a :href="friend.url">{{ friend.name }}</a>
						</li>
					</template>
				</ul>
		  	</div>
		</template>
	</footer>
</template>

<script>
	module.exports = {
		data:function(){
			return {};
		}

	}
</script>