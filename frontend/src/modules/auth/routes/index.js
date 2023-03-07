export default [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: () => import('@/modules/auth/views/LoginView.vue'),
    beforeRouteEnter (to, from, next) {
      if (!localStorage.__access) next({ name: 'login' })
      next()
    },
    children: [
      {
        path: '/sign-in',
        name: 'login-sign-in',
        component: () => import('@/modules/auth/views/layout/SignIn.vue')
      },
      {
        path: '/sign-up',
        name: 'login-sign-up',
        component: () => import('@/modules/auth/views/layout/SignUp.vue')
      },
      {
        path: '/forgot',
        name: 'login-forgot',
        component: () => import('@/modules/auth/views/layout/ForgotPassword.vue')
      },
      {
        path: '/confirm-code',
        name: 'confirm-code',
        component: () => import('@/modules/auth/views/layout/SetCode.vue')
      }
    ]
  }
]
