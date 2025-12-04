import { useHead } from '@unhead/vue/legacy'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'

interface SeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string>
  url?: MaybeRefOrGetter<string>
  type?: 'website' | 'article'
}

// Placeholder domain - update when deployed
const SITE_URL = 'https://learnova.org'
const SITE_NAME = 'Learnova'
const DEFAULT_IMAGE = '/og-image.jpg'

export function useSeo(options: SeoOptions) {
  const fullTitle = computed(() => {
    const title = toValue(options.title)
    return title === 'Home' ? `${SITE_NAME} - Free Education for All` : `${title} | ${SITE_NAME}`
  })

  const description = computed(() => toValue(options.description))
  const image = computed(() => {
    const img = toValue(options.image)
    if (!img) return `${SITE_URL}${DEFAULT_IMAGE}`
    return img.startsWith('http') ? img : `${SITE_URL}${img}`
  })
  const url = computed(() => toValue(options.url) || SITE_URL)
  const type = options.type || 'website'

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
