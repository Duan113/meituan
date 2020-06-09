import Vue from "vue";
import VueRouter from "vue-router";
import BottomNaviga from '../views/homepage/BottomNaviga.vue'
// import TopNaviga from '../views/homepage/TopNaviga.vue'

Vue.use(VueRouter);

const routes = [{
		path: '/',
		redirect: '/BottomNaviga',
	},
	{
		path: '/bottomNaviga',
		name: 'bottomNaviga',
		component: BottomNaviga,
		children: [{
				path: '/',
				name: 'home',
				component: () => import('../views/homepage/Home.vue'),
			},
		],
	},
	// {
	// 	path: '/topnaviga',
	// 	name: 'topnaviga',
	// 	component: TopNaviga,
	// 	children: [{
	// 			path: '/',
	// 			name: 'home',
	// 			component: () => import('../views/homepage/Home.vue'),
	// 		},
	// 	],
	// },
];

const router = new VueRouter({
	routes
});

export default router;
