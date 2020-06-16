import Vue from "vue";
import VueRouter from "vue-router";
import BottomNaviga from '../views/homepage/BottomNaviga.vue';
import Sweep from '../views/home/Sweep.vue';
import PersonInfo from '../views/my/PersonInfo.vue';
import Setting from '../views/my/Setting.vue';
import Message from '../views/my/Message.vue';
import Wallet from '../views/my/Wallet.vue';
import Recharge from '../views/my/Recharge.vue';
import GrabageSort from '../views/my/GrabageSort.vue';
import BorrMoney from '../views/home/BorrMoney.vue';

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
	{
		path: '/setting',
		name: 'setting',
		component: Setting,
	},
	{
		path: '/message',
		name: 'message',
		component: Message,
	},
	{
		path: '/wallet',
		name: 'wallet',
		component: Wallet,
	},
	{
		path: '/recharge',
		name: 'recharge',
		component: Recharge,
	},
	{
		path: '/grabageSort',
		name: 'grabageSort',
		component: GrabageSort,
	},
	{
		path: '/taxes',
		name: 'taxes',
		component: () => import('../views/my/Taxes.vue'),
	},
	{
		path: '/borrMoney',
		name: 'borrMoney',
		component: BorrMoney,
	},
	
];

const router = new VueRouter({
	routes
});

export default router;
