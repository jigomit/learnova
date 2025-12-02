<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

interface Props {
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none'
    delay?: number
    duration?: number
    threshold?: number
    once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    animation: 'fade-up',
    delay: 0,
    duration: 600,
    threshold: 0.1,
    once: true,
})

const elementRef = ref<HTMLElement | null>(null)
const { hasBeenVisible, isVisible } = useIntersectionObserver(elementRef, {
    threshold: props.threshold,
})

const shouldAnimate = computed(() => {
    return props.once ? hasBeenVisible.value : isVisible.value
})

const animationClass = computed(() => {
    if (!shouldAnimate.value) {
        switch (props.animation) {
            case 'fade-up':
                return 'opacity-0 translate-y-8'
            case 'fade-down':
                return 'opacity-0 -translate-y-8'
            case 'fade-left':
                return 'opacity-0 translate-x-8'
            case 'fade-right':
                return 'opacity-0 -translate-x-8'
            case 'scale':
                return 'opacity-0 scale-95'
            default:
                return ''
        }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100'
})
</script>

<template>
    <div
        ref="elementRef"
        :class="animationClass"
        :style="{
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${delay}ms`,
        }"
    >
        <slot />
    </div>
</template>
