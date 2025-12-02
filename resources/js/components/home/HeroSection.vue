<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
    scrollY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <section class="relative min-h-screen overflow-hidden bg-gradient-hero">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920"
                alt="Happy children studying together"
                class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-primary-900/85 to-indigo-900/90"></div>
        </div>

        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
            <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <!-- Decorative shapes -->
        <div
            class="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent-purple/30 blur-3xl"
        ></div>
        <div
            class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-cyan/30 blur-3xl"
        ></div>

        <!-- Floating Animated Shapes -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Circles -->
            <div class="floating-shape absolute top-20 left-10 w-16 h-16 rounded-full bg-accent-purple/20 animate-float" style="animation-delay: 0s;"></div>
            <div class="floating-shape absolute top-40 right-20 w-12 h-12 rounded-full bg-primary-300/30 animate-float-slow" style="animation-delay: 1s;"></div>
            <div class="floating-shape absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-accent-cyan/20 animate-float" style="animation-delay: 2s;"></div>
            <div class="floating-shape absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-primary-400/25 animate-float-slow" style="animation-delay: 0.5s;"></div>

            <!-- Squares -->
            <div class="floating-shape absolute top-60 right-40 w-10 h-10 bg-accent-pink/15 animate-float-slow rotate-45" style="animation-delay: 1.5s;"></div>
            <div class="floating-shape absolute bottom-60 right-10 w-16 h-16 bg-primary-300/20 animate-float rotate-12" style="animation-delay: 2.5s;"></div>
            <div class="floating-shape absolute top-1/2 left-20 w-12 h-12 bg-accent-cyan/15 animate-float-slow -rotate-12" style="animation-delay: 0.8s;"></div>
        </div>

        <!-- Animated Stars and Sparkles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Stars -->
            <div class="absolute top-24 left-1/4 animate-twinkle" style="animation-delay: 0s;">
                <svg class="w-6 h-6 text-accent-purple/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
            </div>
            <div class="absolute top-48 right-1/3 animate-twinkle" style="animation-delay: 1s;">
                <svg class="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
            </div>
            <div class="absolute bottom-1/3 left-1/3 animate-twinkle" style="animation-delay: 2s;">
                <svg class="w-4 h-4 text-accent-pink/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
            </div>

            <!-- Sparkles -->
            <div class="absolute top-32 right-1/4 animate-sparkle" style="animation-delay: 0.5s;">
                <svg class="w-8 h-8 text-accent-purple/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l1.5 10.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5z"/>
                </svg>
            </div>
            <div class="absolute bottom-48 right-1/5 animate-sparkle" style="animation-delay: 1.5s;">
                <svg class="w-6 h-6 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l1.5 10.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5z"/>
                </svg>
            </div>
            <div class="absolute top-2/3 left-1/5 animate-sparkle" style="animation-delay: 2.5s;">
                <svg class="w-7 h-7 text-accent-cyan/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l1.5 10.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5z"/>
                </svg>
            </div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                class="flex min-h-screen flex-col items-center justify-center py-20 text-center lg:py-32"
                :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
            >
                <!-- Badge -->
                <div
                    class="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
                >
                    <span class="h-2 w-2 animate-pulse rounded-full bg-accent-cyan"></span>
                    <span>Empowering 10,000+ students worldwide</span>
                </div>

                <!-- Heading with Gradient Text Effect -->
                <h1
                    class="animate-fade-in-up animation-delay-100 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                    Every Child Deserves a
                    <span class="relative inline-block">
                        <span class="relative z-10 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent animate-gradient-shift">
                            Bright Future
                        </span>
                        <svg
                            class="absolute -bottom-2 left-0 h-3 w-full text-accent-purple"
                            viewBox="0 0 200 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 8C50 2 150 2 198 8"
                                stroke="currentColor"
                                stroke-width="4"
                                stroke-linecap="round"
                            />
                        </svg>
                    </span>
                </h1>

                <!-- Subheading -->
                <p
                    class="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
                >
                    We provide free education, e-learning resources, scholarships, and volunteer
                    teacher programs to underprivileged children, helping them unlock their full
                    potential.
                </p>

                <!-- CTA Buttons -->
                <div
                    class="animate-fade-in-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
                >
                    <Link
                        href="/programs"
                        class="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 transition-all hover:bg-white/90 hover:shadow-lg"
                    >
                        Explore Programs
                        <svg
                            class="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                    </Link>
                    <Link
                        href="/volunteer"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                    >
                        Become a Volunteer
                    </Link>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
/* Floating animations for shapes */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) translateX(0px);
    }
    33% {
        transform: translateY(-20px) translateX(10px);
    }
    66% {
        transform: translateY(-10px) translateX(-10px);
    }
}

@keyframes float-slow {
    0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-30px) translateX(15px) rotate(5deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

/* Twinkling animation for stars */
@keyframes twinkle {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

.animate-twinkle {
    animation: twinkle 2s ease-in-out infinite;
}

/* Sparkle animation */
@keyframes sparkle {
    0%, 100% {
        opacity: 0.2;
        transform: scale(0.8) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.2) rotate(180deg);
    }
}

.animate-sparkle {
    animation: sparkle 3s ease-in-out infinite;
}

/* Gradient shift animation for text */
@keyframes gradient-shift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 4s ease-in-out infinite;
}

</style>
