import Vue from "vue";
import VueRouter from "vue-router";
import BottomNaviga from '../views/homepage/BottomNaviga.vue';
import PersonInfo from '../views/my/PersonInfo.vue';
import Setting from '../views/my/Setting.vue';
import Message from '../views/my/Message.vue';
import Wallet from '../views/my/Wallet.vue';
import Recharge from '../views/my/Recharge.vue';
import GrabageSort from '../views/my/GrabageSort.vue';
import CheckIn from '../views/home/CheckIn.vue';
import BorrMoney from '../views/home/BorrMoney.vue';
import Ticket from '../views/home/Ticket.vue';
import More from '../views/home/More.vue';
import PubWelfare from '../views/home/more/PubWelfare.vue';
import Borrow from '../views/my/Borrow.vue';
import AddBankCard from '../views/my/AddBankCard.vue';
import MonthPay from '../views/my/MonthPay.vue';
import Statement from '../views/my/Statement.vue';
import Evaluation from '../views/my/Evaluation.vue';

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
	{
		path: '/checkIn',
		name: 'checkIn',
		component: CheckIn,
	},
	{
		path: '/ticket',
		name: 'ticket',
		component: Ticket,
	},
	{
		path: '/perInfo',
		name: 'perInfo',
		component: PersonInfo,
	},
	{
		path: '/more',
		name: 'more',
		component: More,
	},
	{
		path: '/pubWelfare',
		name: 'pubWelfare',
		component: PubWelfare,
	},
	{
		path: '/borrow',
		name: 'borrow',
		component: Borrow,
	},
	{
		path: '/addBank',
		name: 'addBank',
		component: AddBankCard,
	},
	{
		path: '/monthPay',
		name: 'monthPay',
		component: MonthPay,
	},
	{
		path: '/statement',
		name: 'statement',
		component: Statement,
	},
	{
		path: '/evaluation',
		name: 'evaluation',
		component: Evaluation,
	},
	
];

const router = new VueRouter({
	routes
});

export default router;
