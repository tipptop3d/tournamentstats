import type { Session } from '@supabase/supabase-js'
import { inject, type Ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { SESSION } from '../keys'
import HomeView from '../views/HomeView.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		requiresAuth?: boolean
		isOwner?: boolean
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/debug',
			component: () => import('../debug/DebugView.vue')
		},
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
			meta: { title: 'Login - TournamentStats' }
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('../views/SignUpView.vue'),
			meta: { title: 'Signup - TournamentStats' }
		},
		{
			path: '/tournament',
			// component: () => import('../views/TournamentView.vue'),
			children: [
				{
					path: 'create',
					name: 'create',
					component: () => import('../views/TournamentCreateView.vue'),
					meta: { title: 'Create Tournament - TournamentStats', requiresAuth: true }
				},
				{
					path: ':id',
					name: 'tournament',
					component: () => import('../views/TournamentDetailsView.vue'),
					meta: { title: 'Name - TournamentStats' },
					children: [
						{
							path: 'dashboard',
							name: 'tournamentDashbord',
							component: () => import('../views/TournamentDashboardView.vue'),
							meta: { title: 'Name Dashboard - TournamentStats', requiresAuth: true, isOwner: true }
						}
					]
				}
			]
		}
	]
})

router.beforeEach((to, _from) => {
	const session = inject(SESSION) as Ref<Session | null>
	const isAuth = session.value != null
	console.log('SESSION', session)
	if (to.meta.requiresAuth && !isAuth) {
		return {
			name: 'login',
			query: {
				redirect: to.fullPath
			}
		}
	}
	if ((to.name == 'login' || to.name == 'signup') && isAuth) {
		const path = to.query.redirect as string | null | undefined
		return {
			path: path ? path : '/'
		}
	}
})

const DEFAULT_TITLE = 'TournamentStats'
router.afterEach((to, _from) => {
	document.title = to.meta.title || DEFAULT_TITLE
})

export default router
