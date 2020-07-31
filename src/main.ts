import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics'
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Projects from './components/Projects.vue';
import Publications from './components/Publications.vue';
import Others from './components/Others.vue';
import O_Cpp_Tensorflow from './components/others_components/Cpp_Tensorflow.vue';
import O_Vrm_for_Cluster from './components/others_components/vrm_for_cluster.vue';
import O_Scheffe_Ura_Version from './components/others_components/Scheffe_Ura_version.vue';
import O_Native_Plugin_Debug from './components/others_components/Native_Plugin_Debug.vue';



library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const Routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: Publications,
  },
  {
    path: '/Others',
    name: 'Others',
    component: Others,
  },
  {
    path: '/Others<vrm_for_cluster>',
    name: 'O_Vrm_for_Cluster',
    component: O_Vrm_for_Cluster,
  },
  {
    path: '/Others<cpp_tensorflow>',
    name: 'O_Cpp_Tensorflow',
    component: O_Cpp_Tensorflow,
  },
  {
    path: '/Others<Scheffe_Ura_version>',
    name: 'O_Scheffe_Ura_Version',
    component: O_Scheffe_Ura_Version,
  },
  {
    path: '/Others<Native_Plugin_debug>',
    name: 'O_Native_Plugin_Debug',
    component: O_Native_Plugin_Debug,
  },
];


const router = new Router({
  routes: Routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
});


Vue.use(Router);
Vue.use(VueAnalytics, {
  id: 'UA-174174903-1',
  router
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
