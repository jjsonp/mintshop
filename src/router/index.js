import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login'
import Home from '../components/home'

Vue.use(Router)
const router = new Router({
        routes: [
            { path: '/', redirect: '/login' },
            { path: '/login', name: 'Login', component: Login },
            { path: '/home', name: 'Home', component: Home }

        ]
    })
    //挂载路由导航守卫，防止未登录直接从url访问到主页
router.beforeEach((to, from, next) => {
        if (to.path === '/login') return next();
        //获取token
        const tokenStr = window.sessionStorage.getItem('token');
        if (!tokenStr) return next('/login')
        next()
    })
    //to:将要访问的路径
    //from:代表从哪个路径来的
    //next:是一个函数，表示放行
    //next('/login) 强制放行
export default router;