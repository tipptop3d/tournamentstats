export const BASE_URL = import.meta.env.PROD
	? import.meta.env.VITE_PRODUCTION_URL
	: import.meta.env.VITE_DEVELOPMENT_URL
