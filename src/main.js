import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;

import {
	Tabbar,
	TabbarItem,
	Icon,
	Divider,
	Grid,
	GridItem,
	Swipe,
	SwipeItem,
	Form,
	Tab,
	Tabs,
	Panel,
	Collapse, 
	CollapseItem
}
from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Panel);
Vue.use(Collapse);
Vue.use(CollapseItem);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
