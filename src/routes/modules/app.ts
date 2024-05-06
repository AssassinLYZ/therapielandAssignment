import AppViewDefaultLayout from '@/components/layouts/app/index.vue'
import HomeView from '@/pages/app/home/index.vue'

export default [
  {
    path: '/app',
    meta: {
      layoutComponent: AppViewDefaultLayout,
    },
    children: [
      {
        path: 'home',
        component: HomeView,
        meta: {
          showFooter: true,
        },
      },
      {
        path: 'details/:id',
        // props: true,
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../../pages/app/details/index.vue'),
      },
    ],
  },
]
