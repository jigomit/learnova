<script setup lang="ts">
import { ref, computed, toRef } from 'vue'
import { useAnimatedCounter } from '@/composables/useAnimatedCounter'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

interface Props {
    target: number
    duration?: number
    prefix?: string
    suffix?: string
    separator?: string
}

const props = withDefaults(defineProps<Props>(), {
    duration: 2000,
    prefix: '',
    suffix: '',
    separator: ',',
})

const elementRef = ref<HTMLElement | null>(null)
const { hasBeenVisible } = useIntersectionObserver(elementRef, { threshold: 0.3 })

const targetRef = toRef(props, 'target')
const { current } = useAnimatedCounter(targetRef, props.duration, hasBeenVisible)

const formattedValue = computed(() => {
    const value = current.value.toString()
    if (props.separator) {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)
    }
    return value
})
</script>

<template>
    <span ref="elementRef">
        {{ prefix }}{{ formattedValue }}{{ suffix }}
    </span>
</template>
