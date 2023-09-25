import type { Ref, InjectionKey } from 'vue'
import type { Session } from '@supabase/supabase-js'

export const SESSION: InjectionKey<Ref<Session | null>> = Symbol('session')
