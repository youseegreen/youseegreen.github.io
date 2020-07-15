import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Projects from './components/Projects.vue';
import Publications from './components/Publications.vue';
import Others from './components/Others.vue';
import O_Cpp_Tensorflow from './components/others_components/Cpp_Tensorflow.vue';

import Test from './components/Test.vue';
import TestHome from './components/test_components/test_home.vue';
import TestTip1 from './components/test_components/test_tip1.vue';



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
    path: '/Others::cpp_tensorflow_tips',
    name: 'O_Cpp_Tensorflow',
    component: O_Cpp_Tensorflow,
  },
];


const router = new Router({
  routes: Routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
});


Vue.use(Router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
