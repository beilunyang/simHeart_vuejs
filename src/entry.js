var Vue = require('vue');
var Router = require('vue-router');
Vue.use(Router);

var router = new Router();

router.map({
	'/':{
		name:'index',
		component:require('./views/index.vue')
	},
	'/page/:id':{
		name:'page',
		component:require('./views/index.vue')
	},
	'/post/:slug':{
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