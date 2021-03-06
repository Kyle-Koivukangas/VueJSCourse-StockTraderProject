import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store.js'

//Vue use:
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'https://vuejscomplete-http.firebaseio.com/';

Vue.use(axios);
Vue.use(VueRouter);


const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {selector: to.hash};
        } else {
            return {X: 0, Y: 0};
        }
    }
});




Vue.filter('currency', function (value, currency = '$', decimals = 2) {
        value = parseFloat(value)
        if (!isFinite(value) || (!value && value !== 0)) return ''
        var stringified = Math.abs(value).toFixed(decimals)
        var _int = stringified.slice(0, -1 - decimals)
        var i = _int.length % 3
        var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ' ' : '')) : ''
        var _float = stringified.slice(-1 - decimals)
        var sign = value < 0 ? '-' : ''
        return sign + currency + head + _int.slice(i) + _float
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    name: 'Main.js'
})
