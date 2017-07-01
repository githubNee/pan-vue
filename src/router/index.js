import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../common/Header.vue'], resolve),
            children:[
                {
                    path: '/public',
                    component: resolve => require(['../components/Public.vue'], resolve)
                }
            ]
        }

    ]
})
