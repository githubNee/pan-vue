import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'main',
            path: '/',
            component: resolve => {
                require.ensure(['../components/Main.vue'], () => {
                    resolve(require('../components/Main.vue'));
                })
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
