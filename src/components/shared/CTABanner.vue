<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ScrollReveal from './ScrollReveal.vue'

interface Props {
    title?: string
    description?: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    variant?: 'primary' | 'light'
}

withDefaults(defineProps<Props>(), {
    title: 'Ready to Make a Difference?',
    description:
        'Join us in our mission to provide quality education to every child. Your support can transform lives.',
    primaryButtonText: 'Get Involved',
    primaryButtonLink: '/volunteer',
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '/about',
    variant: 'primary',
})
</script>

<template>
    <section
        :class="[
            'py-20 lg:py-24',
            variant === 'primary' ? 'bg-gradient-hero text-white' : 'bg-primary-50',
        ]"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" class="text-center">
                <h2
                    :class="[
                        'text-3xl font-bold sm:text-4xl',
                        variant === 'primary' ? 'text-white' : 'text-neutral-900',
                    ]"
                >
                    {{ title }}
                </h2>
                <p
                    :class="[
                        'mx-auto mt-4 max-w-2xl text-lg',
                        variant === 'primary' ? 'text-white/80' : 'text-neutral-600',
                    ]"
                >
                    {{ description }}
                </p>
                <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <RouterLink
                        :to="primaryButtonLink"
                        :class="[
                            'inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold transition-all',
                            variant === 'primary'
                                ? 'bg-white text-primary-600 hover:bg-white/90 hover:shadow-lg'
                                : 'bg-primary-600 text-white hover:bg-primary-700',
                        ]"
                    >
                        {{ primaryButtonText }}
                        <svg
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </RouterLink>
                    <RouterLink
                        :to="secondaryButtonLink"
                        :class="[
                            'inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-lg font-semibold transition-all',
                            variant === 'primary'
                                ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                                : 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
                        ]"
                    >
                        {{ secondaryButtonText }}
                    </RouterLink>
                </div>
            </ScrollReveal>
        </div>
    </section>
</template>
