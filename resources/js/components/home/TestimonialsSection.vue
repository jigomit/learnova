<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { testimonials } from '@/data/testimonials'

const currentIndex = ref(0)
const isAutoPlaying = ref(true)
const isTransitioning = ref(false)
const imageErrors = ref<Record<string, boolean>>({})
let intervalId: ReturnType<typeof setInterval> | null = null

const handleImageError = (testimonialId: string) => {
    imageErrors.value[testimonialId] = true
}

// Dynamic gradient colors for each testimonial
const gradients = [
    'from-violet-900/40 via-purple-900/40 to-primary-900/40',
    'from-primary-900/40 via-indigo-900/40 to-violet-900/40',
    'from-teal-900/40 via-cyan-900/40 to-blue-900/40',
    'from-coral-900/40 via-rose-900/40 to-pink-900/40',
    'from-violet-900/40 via-primary-900/40 to-teal-900/40',
]

const currentGradient = computed(() => {
    return gradients[currentIndex.value % gradients.length]
})

const next = () => {
    if (isTransitioning.value) return
    isTransitioning.value = true
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
    setTimeout(() => {
        isTransitioning.value = false
    }, 600)
}

const prev = () => {
    if (isTransitioning.value) return
    isTransitioning.value = true
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
    setTimeout(() => {
        isTransitioning.value = false
    }, 600)
}

const goTo = (index: number) => {
    if (isTransitioning.value || index === currentIndex.value) return
    isTransitioning.value = true
    currentIndex.value = index
    setTimeout(() => {
        isTransitioning.value = false
    }, 600)
}

const startAutoPlay = () => {
    if (intervalId) clearInterval(intervalId)
    intervalId = setInterval(next, 5000)
}

const stopAutoPlay = () => {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
    }
}

onMounted(() => {
    if (isAutoPlaying.value) {
        startAutoPlay()
    }
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>

<template>
    <section class="relative overflow-hidden bg-neutral-900 py-20 lg:py-28">
        <!-- Parallax Floating Elements -->
        <div class="pointer-events-none absolute inset-0">
            <!-- Floating Circle 1 -->
            <div
                class="absolute left-[10%] top-[20%] h-64 w-64 animate-float-slow rounded-full bg-gradient-to-br from-violet-500/10 to-primary-500/10 blur-3xl"
            ></div>
            <!-- Floating Circle 2 -->
            <div
                class="absolute right-[15%] top-[40%] h-48 w-48 animate-float-medium rounded-full bg-gradient-to-br from-primary-500/10 to-indigo-500/10 blur-3xl"
            ></div>
            <!-- Floating Circle 3 -->
            <div
                class="absolute bottom-[20%] left-[20%] h-56 w-56 animate-float-fast rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-3xl"
            ></div>
            <!-- Floating Circle 4 -->
            <div
                class="absolute bottom-[30%] right-[10%] h-40 w-40 animate-float-slow rounded-full bg-gradient-to-br from-violet-500/10 to-purple-500/10 blur-3xl"
            ></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" class="text-center">
                <span
                    class="inline-block rounded-full bg-primary-500/20 px-4 py-1.5 text-sm font-semibold text-primary-400 backdrop-blur-sm"
                >
                    Testimonials
                </span>
                <h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Stories of Transformation
                </h2>
                <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
                    Hear from students, parents, and volunteers whose lives have been touched by our
                    programs.
                </p>
            </ScrollReveal>

            <!-- Testimonial Carousel -->
            <div
                class="relative mt-16"
                @mouseenter="stopAutoPlay"
                @mouseleave="startAutoPlay"
            >
                <div class="overflow-hidden">
                    <!-- Gradient Background Transition -->
                    <div
                        class="absolute inset-0 -z-10 bg-gradient-to-br opacity-30 blur-3xl transition-all duration-1000"
                        :class="currentGradient"
                    ></div>

                    <div
                        class="flex transition-transform duration-700 ease-in-out"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                    >
                        <div
                            v-for="testimonial in testimonials"
                            :key="testimonial.id"
                            class="w-full flex-shrink-0 px-4"
                        >
                            <!-- Glassmorphism Card -->
                            <div
                                class="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl transition-all duration-500 md:p-12"
                            >
                                <!-- Animated Quote Icon -->
                                <div class="relative mx-auto inline-block">
                                    <svg
                                        class="mx-auto h-12 w-12 animate-pulse-slow text-primary-400/60 md:h-14 md:w-14"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                                        />
                                    </svg>
                                    <!-- Floating accent -->
                                    <div
                                        class="absolute -right-2 -top-2 h-4 w-4 animate-float-fast rounded-full bg-primary-400/40 blur-sm"
                                    ></div>
                                </div>

                                <!-- Quote with fade-in animation -->
                                <blockquote class="mt-8">
                                    <p
                                        class="animate-fade-in text-xl leading-relaxed text-white md:text-2xl lg:text-3xl"
                                    >
                                        "{{ testimonial.quote }}"
                                    </p>
                                </blockquote>

                                <!-- Author with Avatar -->
                                <div class="mt-10">
                                    <!-- Avatar with Animated Ring -->
                                    <div class="relative mx-auto inline-block">
                                        <!-- Animated rotating ring -->
                                        <div
                                            class="absolute -inset-2 animate-spin-slow rounded-full bg-gradient-to-r from-violet-500 via-primary-500 to-teal-500 opacity-75 blur-sm"
                                        ></div>
                                        <!-- Secondary pulsing ring -->
                                        <div
                                            class="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-violet-400 via-primary-400 to-teal-400 opacity-50"
                                        ></div>
                                        <!-- Avatar container -->
                                        <div
                                            class="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-neutral-900 bg-gradient-to-br from-violet-500/30 to-primary-500/30 backdrop-blur-sm"
                                        >
                                            <img
                                                v-if="!imageErrors[testimonial.id]"
                                                :src="testimonial.image"
                                                :alt="testimonial.author"
                                                class="h-full w-full rounded-full object-cover"
                                                @error="handleImageError(testimonial.id)"
                                            />
                                            <span
                                                v-else
                                                class="text-3xl font-bold text-white"
                                            >
                                                {{ testimonial.author.charAt(0) }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Author Info -->
                                    <div class="mt-6">
                                        <div class="text-lg font-semibold text-white">
                                            {{ testimonial.author }}
                                        </div>
                                        <div class="mt-1 text-sm text-neutral-300">
                                            {{ testimonial.role }}
                                        </div>
                                        <div
                                            class="mt-3 inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-300 backdrop-blur-sm"
                                        >
                                            {{ testimonial.program }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Navigation Arrows -->
                <button
                    @click="prev"
                    class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary-400/50 hover:bg-white/20 hover:shadow-lg hover:shadow-primary-500/20 md:p-4"
                    aria-label="Previous testimonial"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    @click="next"
                    class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary-400/50 hover:bg-white/20 hover:shadow-lg hover:shadow-primary-500/20 md:p-4"
                    aria-label="Next testimonial"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                <!-- Enhanced Interactive Dots -->
                <div class="mt-10 flex justify-center gap-3">
                    <button
                        v-for="(_, index) in testimonials"
                        :key="index"
                        @click="goTo(index)"
                        :class="[
                            'rounded-full transition-all duration-300',
                            currentIndex === index
                                ? 'h-3 w-10 scale-110 bg-gradient-to-r from-primary-400 to-purple-400 shadow-lg shadow-primary-500/50'
                                : 'h-3 w-3 scale-100 bg-white/30 hover:scale-125 hover:bg-white/60 hover:shadow-md',
                        ]"
                        :aria-label="`Go to testimonial ${index + 1}`"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes float-slow {
    0%,
    100% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-20px) translateX(10px);
    }
    50% {
        transform: translateY(-10px) translateX(-10px);
    }
    75% {
        transform: translateY(-30px) translateX(5px);
    }
}

@keyframes float-medium {
    0%,
    100% {
        transform: translateY(0) translateX(0);
    }
    33% {
        transform: translateY(-25px) translateX(-15px);
    }
    66% {
        transform: translateY(-15px) translateX(15px);
    }
}

@keyframes float-fast {
    0%,
    100% {
        transform: translateY(0) translateX(0) scale(1);
    }
    50% {
        transform: translateY(-30px) translateX(-20px) scale(1.1);
    }
}

@keyframes pulse-slow {
    0%,
    100% {
        opacity: 0.6;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
    animation: float-fast 4s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.animate-spin-slow {
    animation: spin-slow 8s linear infinite;
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
}
</style>
