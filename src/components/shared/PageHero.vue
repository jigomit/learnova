<script setup lang="ts">
interface Props {
    title: string
    subtitle?: string
    backgroundClass?: string
    backgroundImage?: string
}

withDefaults(defineProps<Props>(), {
    backgroundClass: 'bg-gradient-hero',
})
</script>

<template>
    <section :class="['relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28', backgroundClass]">
        <!-- Background Image -->
        <div v-if="backgroundImage" class="absolute inset-0">
            <img
                :src="backgroundImage"
                alt="Page background"
                class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-primary-900/85 to-violet-900/90"></div>
        </div>

        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
            <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="page-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#page-grid)" />
            </svg>
        </div>

        <!-- Decorative shapes -->
        <div class="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent-purple/20 blur-3xl"></div>
        <div class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1
                    class="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                    {{ title }}
                </h1>
                <p
                    v-if="subtitle"
                    class="animate-fade-in-up animation-delay-100 mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
                >
                    {{ subtitle }}
                </p>
                <slot />
            </div>
        </div>
    </section>
</template>
