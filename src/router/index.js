import Vue from "vue";
import VueRouter from "vue-router";
import BottomNaviga from '../views/homepage/BottomNaviga.vue';
import Sweep from '../views/home/Sweep.vue';
import PersonInfo from '../views/my/PersonInfo.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/BottomNaviga',
	},
	{
		path: '/bottomNaviga',
		name: 'bottomNaviga',
		component: BottomNaviga,
		children: [{
				path: '/home',
				name: 'home',
				component: () => import('../views/homepage/Home.vue'),
			},
			{
				path: '/found',
				name: 'found',
				component: () => import('../views/homepage/Found.vue'),
			},
			{
				path: '/orde',
				name: 'orde',
				component: () => import('../views/homepage/Orde.vue'),
			},
			{
				path: '/my',
				name: 'my',
				component: () => import('../views/homepage/My.vue'),
			},
		],
	},
	{
		path: '/sweep',
		name: 'sweep',
		component: Sweep,
	},
	{
		path: '/perInfo',
		name: 'perInfo',
		component: PersonInfo,
	},
];

const router = new VueRouter({
	routes
});

export default router;
