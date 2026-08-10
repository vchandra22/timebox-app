import { createI18n } from 'vue-i18n'

interface LocaleMessages {
  [key: string]: string | LocaleMessages
}

const localeModules = import.meta.glob<{ default: LocaleMessages }>('./locales/*.json', {
  eager: true,
})

const messages = Object.entries(localeModules).reduce<Record<string, LocaleMessages>>(
  (messages, [path, module]) => {
    const locale = path.split('/').pop()?.replace('.json', '')

    if (locale) {
      messages[locale] = module.default
    }

    return messages
  },
  {},
)

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
