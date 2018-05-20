import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Projects from '@/components/pages/Projects'
import Data from '@/components/pages/Data'
import Contact from '@/components/pages/Contact'
import Qualification from '@/components/pages/Qualification'
import Additional from '@/components/pages/Additional'
import Situation from '@/components/pages/Situation'
import Formation from '@/components/pages/Formation'
import Experience from '@/components/pages/Experience'
import Courses from '@/components/pages/Courses'
import Computing from '@/components/pages/Computing'
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/projetos', name: Projects, component: Projects },
    { path: '/dados', name: 'Data', component: Data },
    { path: '/contato', name: 'Contact', component: Contact },
    { path: '/qualificacao', name: 'Qualification', component: Qualification },
    { path: '/complementar', name: 'Additional', component: Additional },
    { path: '/situacao', name: 'Situation', component: Situation },
    { path: '/formacao', name: 'Formation', component: Formation },
    { path: '/experiencia', name: 'Experience', component: Experience },
    { path: '/cursos', name: 'Courses', component: Courses },
    { path: '/informatica', name: 'Computing', component: Computing },
    { path: '/*', name: 'NotFound', component: NotFound }
  ]
})
