import Vue from 'vue'
import Router from 'vue-router'

import CreateLink from '@/components/CreateLink'
import LinkList from '@/components/LinkList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Link List',
      component: LinkList
    },
    {
      path: '/create',
      name: 'Create Link',
      component: CreateLink,
    }
  ],
  mode: 'history'
})
