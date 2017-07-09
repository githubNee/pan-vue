import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/public'
        },
        {
            name: 'public',
            path: '/public',
            component: resolve => {
                require.ensure(['../components/Public.vue'], () => {
                    resolve(require('../components/Public.vue'));
                })
            }
        },
        {
            name: 'private',
            path: '/private',
            component: resolve => {
                require.ensure(['../components/Private.vue'], () => {
                    resolve(require('../components/Private.vue'));
                })
            }
        },
        {
            path: '*',
            redirect: '/public'
        }
    ]
})
