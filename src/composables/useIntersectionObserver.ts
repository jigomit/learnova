import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useIntersectionObserver(
    elementRef: Ref<HTMLElement | null>,
    options: IntersectionObserverInit = {}
) {
    const isVisible = ref(false)
    const hasBeenVisible = ref(false)

    const defaultOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
    }

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                isVisible.value = entry.isIntersecting
                if (entry.isIntersecting) {
                    hasBeenVisible.value = true
                }
            })
        }, defaultOptions)

        if (elementRef.value) {
            observer.observe(elementRef.value)
        }
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    return { isVisible, hasBeenVisible }
}
