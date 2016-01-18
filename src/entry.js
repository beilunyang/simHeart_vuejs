var Vue = require('vue');
var Router = require('vue-router');
Vue.use(Router);

var router = new Router();

Vue.directive('show-comment',{
	bind:function(){
		(function() { 
		var d = document, s = d.createElement('script');
		s.id = 'disqus';
		s.src = '//bitibiti.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();
	},
	update:function(newValue,oldValue){
		var disqus_config = function () {
		this.page.url = newValue.url;
		this.page.identifier = newValue.id;
		} 
	},
	unbind:function(){
		var dis = document.getElementById('disqus');
		dis.parentNode.removeChild(dis);
	}
});

router.map({
	'/':{
		name:'index',
		component:require('./views/index.vue')
	},
	'/page/:id':{
		name:'page',
		component:require('./views/index.vue')
	},
	'/post/:id':{
		name:'post',
		component:require('./views/post.vue')
	},
	'*':{
		component:require('./views/404.vue')
	}
});
window.route = router;
var App = Vue.extend({});
router.start(App,'#app');