'use server'

import { createClient } from '@/lib/supabase/server'

export type NewsletterState = {
  success?: boolean
  error?: string
} | null

export async function subscribeNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Email inválido. Por favor, verifique e tente novamente.' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email })

  if (error) {
    // code 23505 = unique_violation → email já subscrito → tratar como sucesso silencioso
    if (error.code === '23505') {
      return { success: true }
    }
    console.error('[newsletter]', error.message)
    return { error: 'Ocorreu um erro. Por favor, tente novamente mais tarde.' }
  }

  return { success: true }
}
