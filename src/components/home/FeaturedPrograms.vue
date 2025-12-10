<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { programs } from '@/data/programs'

const getIcon = (iconName: string) => {
    const icons: Record<string, string> = {
        school: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        laptop: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        award: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    }
    return icons[iconName] || icons.school
}

const getColorClasses = (color: string) => {
    const colors: Record<string, {
        bg: string;
        text: string;
        border: string;
        gradient: string;
        cardBg: string;
        glowShadow: string;
    }> = {
        primary: {
            bg: 'bg-primary-100 group-hover:bg-primary-600',
            text: 'text-primary-600 group-hover:text-white',
            border: 'border-primary-200',
            gradient: 'from-primary-400 via-primary-500 to-primary-600',
            cardBg: 'bg-gradient-to-br from-primary-50/50 to-white',
            glowShadow: 'group-hover:shadow-primary-500/25',
        },
        secondary: {
            bg: 'bg-secondary-100 group-hover:bg-secondary-600',
            text: 'text-secondary-600 group-hover:text-white',
            border: 'border-secondary-200',
            gradient: 'from-secondary-400 via-secondary-500 to-secondary-600',
            cardBg: 'bg-gradient-to-br from-secondary-50/50 to-white',
            glowShadow: 'group-hover:shadow-secondary-500/25',
        },
        teal: {
            bg: 'bg-teal-100 group-hover:bg-teal-600',
            text: 'text-teal-600 group-hover:text-white',
            border: 'border-teal-200',
            gradient: 'from-teal-400 via-teal-500 to-cyan-600',
            cardBg: 'bg-gradient-to-br from-teal-50/50 to-white',
            glowShadow: 'group-hover:shadow-teal-500/25',
        },
        coral: {
            bg: 'bg-coral-100 group-hover:bg-coral-500',
            text: 'text-coral-600 group-hover:text-white',
            border: 'border-coral-200',
            gradient: 'from-coral-400 via-coral-500 to-rose-600',
            cardBg: 'bg-gradient-to-br from-coral-50/50 to-white',
            glowShadow: 'group-hover:shadow-coral-500/25',
        },
        violet: {
            bg: 'bg-violet-100 group-hover:bg-violet-600',
            text: 'text-violet-600 group-hover:text-white',
            border: 'border-violet-200',
            gradient: 'from-violet-400 via-violet-500 to-purple-600',
            cardBg: 'bg-gradient-to-br from-violet-50/50 to-white',
            glowShadow: 'group-hover:shadow-violet-500/25',
        },
        'accent-green': {
            bg: 'bg-teal-100 group-hover:bg-teal-600',
            text: 'text-teal-600 group-hover:text-white',
            border: 'border-teal-200',
            gradient: 'from-teal-400 via-teal-500 to-cyan-600',
            cardBg: 'bg-gradient-to-br from-teal-50/50 to-white',
            glowShadow: 'group-hover:shadow-teal-500/25',
        },
        'accent-yellow': {
            bg: 'bg-coral-100 group-hover:bg-coral-500',
            text: 'text-coral-600 group-hover:text-white',
            border: 'border-coral-200',
            gradient: 'from-coral-400 via-coral-500 to-rose-600',
            cardBg: 'bg-gradient-to-br from-coral-50/50 to-white',
            glowShadow: 'group-hover:shadow-coral-500/25',
        },
        'accent-purple': {
            bg: 'bg-violet-100 group-hover:bg-violet-600',
            text: 'text-violet-600 group-hover:text-white',
            border: 'border-violet-200',
            gradient: 'from-violet-400 via-violet-500 to-purple-600',
            cardBg: 'bg-gradient-to-br from-violet-50/50 to-white',
            glowShadow: 'group-hover:shadow-violet-500/25',
        },
    }
    return colors[color] || colors.primary
}
</script>

<template>
    <section class="bg-white py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" class="text-center">
                <span
                    class="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700"
                >
                    What We Do
                </span>
                <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
                    Our Programs
                </h2>
                <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                    We offer comprehensive educational support through multiple programs designed to
                    meet the diverse needs of underprivileged children.
                </p>
            </ScrollReveal>

            <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <ScrollReveal
                    v-for="(program, index) in programs"
                    :key="program.id"
                    animation="fade-up"
                    :delay="index * 100"
                >
                    <RouterLink
                        :to="program.href"
                        class="group relative block h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <!-- Card Content with Background -->
                        <div
                            :class="[
                                'relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 border-2',
                                getColorClasses(program.color).cardBg,
                                getColorClasses(program.color).border,
                                'shadow-lg',
                                getColorClasses(program.color).glowShadow,
                                'group-hover:shadow-2xl',
                            ]"
                        >
                            <!-- Shimmer Effect -->
                            <div class="shimmer-effect absolute inset-0 rounded-2xl"></div>

                            <!-- Image with hover zoom and gradient overlay -->
                            <div class="relative h-52 overflow-hidden -mx-[2px] -mt-[2px]">
                                <img
                                    :src="program.image"
                                    :alt="program.imageAlt"
                                    class="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <!-- Gradient overlay -->
                                <div
                                    :class="[
                                        'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent',
                                    ]"
                                ></div>
                            </div>

                            <div class="flex flex-col flex-1 p-6 min-h-[320px]">
                                <!-- Icon with Animation -->
                                <div
                                    :class="[
                                        'relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500',
                                        getColorClasses(program.color).bg,
                                        getColorClasses(program.color).text,
                                        'group-hover:scale-110 group-hover:rotate-6',
                                    ]"
                                >
                                    <svg
                                        class="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            :d="getIcon(program.icon)"
                                        />
                                    </svg>
                                </div>

                                <!-- Title -->
                                <h3
                                    class="relative z-10 text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-primary-600"
                                >
                                    {{ program.title }}
                                </h3>

                                <!-- Description -->
                                <p class="relative z-10 mt-2 text-neutral-600">
                                    {{ program.shortDescription }}
                                </p>

                                <!-- Features Preview -->
                                <ul class="relative z-10 mt-4 space-y-2 flex-1">
                                    <li
                                        v-for="feature in program.features.slice(0, 3)"
                                        :key="feature"
                                        class="flex items-center gap-2 text-sm text-neutral-500"
                                    >
                                        <svg
                                            class="h-4 w-4 flex-shrink-0 text-primary-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {{ feature }}
                                    </li>
                                </ul>

                                <!-- Learn More with Animated Arrow - Always at bottom -->
                                <div
                                    class="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors duration-300 group-hover:text-primary-700"
                                >
                                    <span class="relative">
                                        Learn More
                                        <span
                                            class="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-600 transition-all duration-300 group-hover:w-full"
                                        ></span>
                                    </span>
                                    <svg
                                        class="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </ScrollReveal>
            </div>
        </div>
    </section>
</template>

<style scoped>
.shimmer-effect {
    background: linear-gradient(
        120deg,
        transparent 0%,
        transparent 40%,
        rgba(255, 255, 255, 0.5) 50%,
        transparent 60%,
        transparent 100%
    );
    background-size: 200% 100%;
    background-position: -200% 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Only enable shimmer on non-touch devices */
@media (hover: hover) and (pointer: fine) {
    .group:hover .shimmer-effect {
        opacity: 1;
        animation: shimmer 1.5s ease-in-out;
    }
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

/* Pulse animation for icons as alternative */
@keyframes pulse-scale {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

/* Add subtle pulse to icon background on hover - desktop only */
@media (hover: hover) and (pointer: fine) {
    .group:hover [class*="inline-flex"][class*="h-14"] {
        animation: pulse-scale 2s ease-in-out infinite;
    }
}

/* Disable animations on mobile */
@media (max-width: 768px) {
    .shimmer-effect {
        display: none;
    }
}
</style>
