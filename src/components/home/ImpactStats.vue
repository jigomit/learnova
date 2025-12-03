<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import AnimatedCounter from '@/components/shared/AnimatedCounter.vue'
import { impactStatistics } from '@/data/statistics'

const getIcon = (iconName: string) => {
    const icons: Record<string, string> = {
        users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        building:
            'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    }
    return icons[iconName] || icons.users
}

// Get emoji icons for additional visual appeal
const getEmojiIcon = (index: number) => {
    const emojis = ['🎓', '🏫', '🤝', '💰']
    return emojis[index] || '✨'
}

// Color themes for each stat card (Students, Schools, Volunteers, Scholarships)
const colorThemes = [
    {
        // Students - Violet gradient
        gradient: 'from-violet-500 via-violet-600 to-purple-600',
        lightGradient: 'from-violet-400 via-violet-500 to-purple-500',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        iconHoverBg: 'group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600',
        glow: 'shadow-violet-500/50',
        progressBg: 'bg-violet-200',
        progressFill: 'bg-gradient-to-r from-violet-400 to-purple-600',
        accentDot: 'bg-violet-400',
        particle: 'bg-violet-300',
    },
    {
        // Schools - Teal gradient
        gradient: 'from-teal-500 via-teal-600 to-cyan-600',
        lightGradient: 'from-teal-400 via-teal-500 to-cyan-500',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        iconHoverBg: 'group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-cyan-600',
        glow: 'shadow-teal-500/50',
        progressBg: 'bg-teal-200',
        progressFill: 'bg-gradient-to-r from-teal-400 to-cyan-600',
        accentDot: 'bg-teal-400',
        particle: 'bg-teal-300',
    },
    {
        // Volunteers - Coral gradient
        gradient: 'from-coral-500 via-coral-600 to-rose-600',
        lightGradient: 'from-coral-400 via-coral-500 to-rose-500',
        iconBg: 'bg-coral-100',
        iconColor: 'text-coral-600',
        iconHoverBg: 'group-hover:bg-gradient-to-br group-hover:from-coral-500 group-hover:to-rose-600',
        glow: 'shadow-coral-500/50',
        progressBg: 'bg-coral-200',
        progressFill: 'bg-gradient-to-r from-coral-400 to-rose-600',
        accentDot: 'bg-coral-400',
        particle: 'bg-coral-300',
    },
    {
        // Scholarships - Primary (Indigo) gradient
        gradient: 'from-primary-500 via-primary-600 to-indigo-700',
        lightGradient: 'from-primary-400 via-primary-500 to-indigo-600',
        iconBg: 'bg-primary-100',
        iconColor: 'text-primary-600',
        iconHoverBg: 'group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-indigo-700',
        glow: 'shadow-primary-500/50',
        progressBg: 'bg-primary-200',
        progressFill: 'bg-gradient-to-r from-primary-400 to-indigo-700',
        accentDot: 'bg-primary-400',
        particle: 'bg-primary-300',
    },
]

// Calculate progress percentage for each stat (assuming max values for demo)
const getProgressPercentage = (index: number) => {
    const maxValues = [50000, 500, 100000, 100] // Example max values for each stat
    const stat = impactStatistics[index]
    if (!stat) return 85
    return Math.min((stat.value / maxValues[index]) * 100, 100)
}
</script>

<template>
    <section class="bg-primary-50 py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" class="text-center">
                <span
                    class="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700"
                >
                    Our Impact
                </span>
                <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
                    Making a Difference, One Child at a Time
                </h2>
                <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                    Through the support of our volunteers, donors, and partners, we've been able to
                    transform thousands of lives.
                </p>
            </ScrollReveal>

            <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <ScrollReveal
                    v-for="(stat, index) in impactStatistics"
                    :key="stat.id"
                    animation="fade-up"
                    :delay="index * 150"
                    class="h-full"
                >
                    <div
                        class="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        :class="colorThemes[index % colorThemes.length].glow"
                    >
                        <!-- Gradient Background Overlay -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                            :class="colorThemes[index % colorThemes.length].gradient"
                        ></div>

                        <!-- Top Gradient Border -->
                        <div
                            class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r shadow-lg"
                            :class="colorThemes[index % colorThemes.length].gradient"
                        ></div>

                        <!-- Floating Decorative Particles -->
                        <div class="pointer-events-none absolute inset-0 overflow-hidden">
                            <!-- Particle 1 -->
                            <div
                                class="absolute h-3 w-3 rounded-full opacity-30 animate-float"
                                :class="colorThemes[index % colorThemes.length].particle"
                                :style="{ top: '10%', left: '15%', animationDelay: '0s', animationDuration: '3s' }"
                            ></div>
                            <!-- Particle 2 -->
                            <div
                                class="absolute h-2 w-2 rounded-full opacity-25 animate-float"
                                :class="colorThemes[index % colorThemes.length].particle"
                                :style="{ top: '70%', right: '20%', animationDelay: '1s', animationDuration: '4s' }"
                            ></div>
                            <!-- Particle 3 -->
                            <div
                                class="absolute h-2.5 w-2.5 rounded-full opacity-20 animate-float"
                                :class="colorThemes[index % colorThemes.length].particle"
                                :style="{ top: '40%', left: '80%', animationDelay: '2s', animationDuration: '3.5s' }"
                            ></div>
                            <!-- Particle 4 -->
                            <div
                                class="absolute h-4 w-4 rounded-full opacity-15 animate-float"
                                :class="colorThemes[index % colorThemes.length].particle"
                                :style="{ bottom: '20%', left: '10%', animationDelay: '1.5s', animationDuration: '4.5s' }"
                            ></div>
                        </div>

                        <!-- Decorative Dots with Enhanced Animation -->
                        <div class="absolute right-4 top-4 flex gap-1.5">
                            <div
                                class="h-2 w-2 rounded-full opacity-60 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
                                :class="colorThemes[index % colorThemes.length].accentDot"
                            ></div>
                            <div
                                class="h-2 w-2 rounded-full opacity-40 transition-all delay-75 duration-300 group-hover:scale-150 group-hover:opacity-100"
                                :class="colorThemes[index % colorThemes.length].accentDot"
                            ></div>
                            <div
                                class="h-2 w-2 rounded-full opacity-20 transition-all delay-150 duration-300 group-hover:scale-150 group-hover:opacity-100"
                                :class="colorThemes[index % colorThemes.length].accentDot"
                            ></div>
                        </div>

                        <!-- Animated Icon with Pulse Effect & Emoji -->
                        <div class="relative mb-6 flex items-start justify-between">
                            <div class="relative">
                                <div
                                    class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:animate-bounce group-hover:text-white group-hover:shadow-xl"
                                    :class="[
                                        colorThemes[index % colorThemes.length].iconBg,
                                        colorThemes[index % colorThemes.length].iconColor,
                                        colorThemes[index % colorThemes.length].iconHoverBg,
                                    ]"
                                >
                                    <svg
                                        class="h-8 w-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            :d="getIcon(stat.icon)"
                                        />
                                    </svg>
                                </div>

                                <!-- Pulsing Ring Effect -->
                                <div
                                    class="absolute left-0 top-0 h-16 w-16 animate-ping rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                                    :class="colorThemes[index % colorThemes.length].iconBg"
                                ></div>

                                <!-- Secondary Pulse Ring -->
                                <div
                                    class="absolute left-0 top-0 h-16 w-16 animate-pulse rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                                    :class="colorThemes[index % colorThemes.length].iconBg"
                                    style="animation-delay: 0.3s"
                                ></div>
                            </div>

                            <!-- Colorful Emoji Icon -->
                            <div
                                class="text-4xl opacity-80 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 group-hover:animate-bounce"
                                style="animation-delay: 0.2s"
                            >
                                {{ getEmojiIcon(index) }}
                            </div>
                        </div>

                        <!-- Number with Enhanced Glow Effect -->
                        <div class="relative mb-3">
                            <!-- Multi-layer glow effect -->
                            <div
                                class="absolute inset-0 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                                :class="colorThemes[index % colorThemes.length].gradient"
                            ></div>
                            <div
                                class="absolute inset-0 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                                :class="colorThemes[index % colorThemes.length].lightGradient"
                            ></div>
                            <div
                                class="relative bg-gradient-to-br bg-clip-text text-5xl font-extrabold text-transparent transition-all duration-300 group-hover:scale-105"
                                :class="colorThemes[index % colorThemes.length].gradient"
                            >
                                <AnimatedCounter
                                    :target="stat.value"
                                    :suffix="stat.suffix || ''"
                                    :prefix="stat.prefix || ''"
                                />
                            </div>
                            <!-- Sparkle effect on hover -->
                            <div
                                class="absolute -right-2 -top-1 text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                            >
                                ✨
                            </div>
                        </div>

                        <!-- Label -->
                        <div class="mb-4 text-lg font-semibold text-neutral-700">
                            {{ stat.label }}
                        </div>

                        <!-- Description -->
                        <p v-if="stat.description" class="mb-4 text-sm text-neutral-500">
                            {{ stat.description }}
                        </p>

                        <!-- Enhanced Progress Bar with Animation -->
                        <div class="relative mt-6">
                            <div class="relative">
                                <div
                                    class="h-3 overflow-hidden rounded-full shadow-inner"
                                    :class="colorThemes[index % colorThemes.length].progressBg"
                                >
                                    <!-- Animated progress fill with shimmer -->
                                    <div
                                        class="relative h-full rounded-full shadow-lg transition-all duration-1000 ease-out"
                                        :class="colorThemes[index % colorThemes.length].progressFill"
                                        :style="{
                                            width: `${getProgressPercentage(index)}%`,
                                            transitionDelay: `${index * 200}ms`,
                                        }"
                                    >
                                        <!-- Progress shimmer effect -->
                                        <div
                                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"
                                        ></div>
                                    </div>
                                </div>
                                <!-- Glow effect under progress bar -->
                                <div
                                    class="absolute -inset-y-1 left-0 rounded-full opacity-0 blur-md transition-all duration-1000 group-hover:opacity-50"
                                    :class="colorThemes[index % colorThemes.length].progressFill"
                                    :style="{
                                        width: `${getProgressPercentage(index)}%`,
                                        transitionDelay: `${index * 200}ms`,
                                    }"
                                ></div>
                            </div>
                            <div class="mt-2 flex items-center justify-between">
                                <div
                                    class="text-xs font-semibold bg-gradient-to-r bg-clip-text text-transparent"
                                    :class="colorThemes[index % colorThemes.length].gradient"
                                >
                                    {{ Math.round(getProgressPercentage(index)) }}% achieved
                                </div>
                                <div class="text-xs font-medium text-neutral-400">Goal 100%</div>
                            </div>
                        </div>

                        <!-- Multiple Decorative corner gradients -->
                        <div
                            class="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-25 animate-pulse-slow"
                            :class="colorThemes[index % colorThemes.length].gradient"
                        ></div>
                        <div
                            class="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-5 transition-all duration-700 group-hover:scale-150 group-hover:opacity-15 animate-pulse-slow"
                            :class="colorThemes[index % colorThemes.length].gradient"
                            style="animation-delay: 1s"
                        ></div>

                        <!-- Animated Border Shimmer -->
                        <div
                            class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style="
                                background: linear-gradient(
                                    90deg,
                                    transparent,
                                    rgba(255, 255, 255, 0.4),
                                    transparent
                                );
                                animation: shimmer 2s infinite;
                            "
                        ></div>

                        <!-- Circular Progress Indicator (Mini) -->
                        <div class="absolute bottom-4 right-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                            <svg class="h-10 w-10 -rotate-90 transform" viewBox="0 0 36 36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    :class="colorThemes[index % colorThemes.length].progressBg"
                                    stroke-width="3"
                                ></circle>
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    class="transition-all duration-1000 ease-out"
                                    :class="colorThemes[index % colorThemes.length].accentDot"
                                    stroke-width="3"
                                    :stroke-dasharray="`${getProgressPercentage(index)} ${100 - getProgressPercentage(index)}`"
                                    stroke-linecap="round"
                                ></circle>
                            </svg>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Floating particles animation */
@keyframes float {
    0%,
    100% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.3;
    }
    25% {
        transform: translateY(-15px) translateX(5px) scale(1.1);
        opacity: 0.5;
    }
    50% {
        transform: translateY(-20px) translateX(-5px) scale(1);
        opacity: 0.4;
    }
    75% {
        transform: translateY(-10px) translateX(10px) scale(0.9);
        opacity: 0.6;
    }
}

/* Slow pulse animation for decorative elements */
@keyframes pulse-slow {
    0%,
    100% {
        opacity: 0.1;
        transform: scale(1);
    }
    50% {
        opacity: 0.25;
        transform: scale(1.05);
    }
}

/* Shimmer animation for progress bar */
@keyframes shimmer-progress {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(200%);
    }
}

/* Custom float animation class */
.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Custom slow pulse animation class */
.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

/* Shimmer animation for progress bars */
.animate-shimmer {
    animation: shimmer-progress 2s ease-in-out infinite;
}

/* Enhance hover animations */
.group:hover .animate-bounce {
    animation: bounce 1s infinite;
}

/* Glow effect on hover */
@keyframes glow-pulse {
    0%,
    100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }
    50% {
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
}

/* Number counting animation enhancement */
@keyframes number-pop {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

/* Icon rotation on hover */
.group:hover svg {
    animation: icon-wiggle 0.5s ease-in-out;
}

@keyframes icon-wiggle {
    0%,
    100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-12deg);
    }
    75% {
        transform: rotate(12deg);
    }
}

/* Gradient text animation */
@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.bg-clip-text {
    background-size: 200% auto;
    animation: gradient-shift 3s ease infinite;
}
</style>
