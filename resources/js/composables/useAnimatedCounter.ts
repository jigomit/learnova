import { ref, watch, type Ref } from 'vue'

export function useAnimatedCounter(
    target: Ref<number>,
    duration: number = 2000,
    startOnVisible: Ref<boolean> = ref(true)
) {
    const current = ref(0)
    const isAnimating = ref(false)

    const animate = () => {
        if (isAnimating.value) return

        isAnimating.value = true
        const startTime = performance.now()
        const startValue = current.value
        const endValue = target.value

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function (ease-out-cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3)

            current.value = Math.floor(startValue + (endValue - startValue) * easeProgress)

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                current.value = endValue
                isAnimating.value = false
            }
        }

        requestAnimationFrame(step)
    }

    watch(
        startOnVisible,
        (visible) => {
            if (visible && current.value === 0) {
                animate()
            }
        },
        { immediate: true }
    )

    return { current, animate, isAnimating }
}
