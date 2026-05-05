const React = require('react')

// Store for current messages - set by NextIntlClientProvider
let currentMessages = {}
let currentLocale = 'zh-TW'

// Mock NextIntlClientProvider - stores messages and renders children
function NextIntlClientProvider({ children, messages, locale }) {
  if (messages) currentMessages = messages
  if (locale) currentLocale = locale
  return children
}

// Mock useTranslations - looks up messages by namespace and key
function useTranslations(namespace) {
  return function t(key) {
    const ns = currentMessages[namespace]
    if (ns && ns[key] !== undefined) {
      return ns[key]
    }
    return `${namespace}.${key}`
  }
}

// Mock useLocale
function useLocale() {
  return currentLocale
}

// Mock useMessages
function useMessages() {
  return currentMessages
}

module.exports = {
  NextIntlClientProvider,
  useTranslations,
  useLocale,
  useMessages,
}
