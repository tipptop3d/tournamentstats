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
			component: () => import('../views/SignupView.vue'),
			meta: { title: 'Signup - TournamentStats' }
		},
		{
			path: '/tournament',
			redirect: { name: 'create' },
			children: [
				{
					path: 'create',
					name: 'create',
					component: () => import('../views/tournament/CreateView.vue'),
					meta: { title: 'Create Tournament - TournamentStats', requiresAuth: true }
				},
				{
					path: ':id',
					name: 'tournament',
					component: () => import('../views/tournament/TournamentIdView.vue'),
					meta: { title: 'Name - TournamentStats' },
					children: [
						{
							path: 'dashboard',
							name: 'tournamentDashbord',
							component: () => import('../views/tournament/dashboard/DashboardView.vue'),
							meta: { title: 'Name Dashboard - TournamentStats', requiresAuth: true, isOwner: true },
							children: [
								{
									path: 'overview',
									name: 'overview',
									component: () => import('../views/tournament/dashboard/OverviewView.vue'),
									meta: { title: 'Overview - TournamentStats' }
								},
								{
									path: 'teams',
									name: 'dashboardTeams',
									component: () => import('../views/tournament/dashboard/TeamsView.vue'),
									meta: { title: 'Teams - TournamentStats' }
								},
								{
									path: 'matches',
									name: 'dashboardMatches',
									component: () => import('../views/tournament/dashboard/MatchesView.vue'),
									meta: { title: 'Matches - TournamentStats' },
									children: [
										{
											path: ':matchId',
											name: 'dashboardSpecificMatch',
											component: () => import('../views/tournament/dashboard/MatchIdView.vue'),
											meta: { title: 'G2 vs BLG - TournamentStats' }
										}
									]
								},
								{
									path: 'settings',
									name: 'dashboardSettings',
									component: () => import('../views/tournament/dashboard/SettingsView.vue'),
									meta: { title: 'Settings - TournamentStats' }
								},
							]
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
