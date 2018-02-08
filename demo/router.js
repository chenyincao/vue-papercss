import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home'
import Download from './page/Download'
import Card from './page/component/Card'
import Button from './page/component/Button'
import Article from './page/component/Article'
import Badge from './page/component/Badge'
import Alert from './page/component/Alert'
import Table from './page/component/Table'
import Popover from './page/component/Popover'
import Flexbox from './page/Flexbox'
import NotFound from './page/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/component/card',
      name: 'card',
      component: Card
    },
    {
      path: '/component/button',
      name: 'button',
      component: Button
    },
    {
      path: '/component/article',
      name: 'article',
      component: Article
    },
    {
      path: '/component/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/component/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/component/table',
      name: 'table',
      component: Table
    },
    {
      path: '/component/popover',
      name: 'popover',
      component: Popover
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: Flexbox
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
