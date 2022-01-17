import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import('@/views/home')

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/informationData',
            children:[
                {// 教育信息化数据
                    path: '/informationData',
                    name: 'informationData',
                    component: () => import ('@/views/informationData'),
                    meta:{
                        type:'informationData'
                    }
                },
                {// 教师教学数据
                    path: '/teachingData',
                    name: 'teachingData',
                    component: () => import ('@/views/teachingData'),
                    meta:{
                        type:'teachingData'
                    }
                },
                {// 学生学习数据
                    path: '/studyData',
                    name: 'studyData',
                    component: () => import ('@/views/studyData'),
                    meta:{
                        type:'studyData'
                    }
                },
                {// 设备应用数据
                    path: '/appData',
                    name: 'appData',
                    component: () => import ('@/views/appData'),
                    meta:{
                        type:'appData'
                    }
                }
            ]
        },
    ]
})