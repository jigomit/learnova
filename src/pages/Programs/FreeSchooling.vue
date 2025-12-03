<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import { getProgram } from '@/data/programs'

const program = getProgram('free-schooling')!
</script>

<template>

    <AppLayout>
        <PageHero
            title="Free Schooling"
            subtitle="Quality education at no cost for underprivileged children."
            background-image="https://images.unsplash.com/photo-1529390079861-591f89c42682?w=1200"
        />

        <!-- Overview -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal animation="fade-right">
                        <div class="relative">
                            <!-- Decorative background -->
                            <div class="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-200/50 to-primary-200/50"></div>
                            <div class="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-violet-100">
                                <img
                                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600"
                                    alt="School children with backpacks"
                                    class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent"></div>
                                <!-- Icon overlay -->
                                <div class="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-lg">
                                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                            </div>
                            <!-- Decorative accent -->
                            <div class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-accent-cyan/30 blur-2xl"></div>
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal animation="fade-left">
                            <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                                Breaking Barriers to Education
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" :delay="100">
                            <p class="mt-6 text-lg text-neutral-600">
                                {{ program.description }}
                            </p>
                            <p class="mt-4 text-lg text-neutral-600">
                                Our schools are more than just classrooms—they are safe havens where
                                children can learn, play, and grow. We provide everything from
                                qualified teachers to nutritious meals, ensuring that nothing stands
                                between a child and their education.
                            </p>
                        </ScrollReveal>

                        <!-- Stats -->
                        <ScrollReveal animation="fade-left" :delay="200">
                            <div class="mt-8 grid grid-cols-3 gap-6">
                                <div
                                    v-for="stat in program.stats"
                                    :key="stat.label"
                                    class="text-center"
                                >
                                    <div class="text-3xl font-bold text-primary-600">
                                        {{ stat.value }}
                                    </div>
                                    <div class="mt-1 text-sm text-neutral-500">
                                        {{ stat.label }}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Provide -->
        <section class="bg-neutral-50 py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        What We Provide
                    </h2>
                    <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Everything a child needs to succeed in their educational journey.
                    </p>
                </ScrollReveal>

                <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <ScrollReveal
                        v-for="(feature, index) in program.features"
                        :key="feature"
                        animation="fade-up"
                        :delay="index * 100"
                    >
                        <div
                            class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                        >
                            <div
                                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600"
                            >
                                <svg
                                    class="h-6 w-6"
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
                            </div>
                            <h3 class="text-lg font-semibold text-neutral-900">
                                {{ feature }}
                            </h3>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        How It Works
                    </h2>
                </ScrollReveal>

                <div class="mt-16 grid gap-8 md:grid-cols-3">
                    <ScrollReveal animation="fade-up" :delay="0">
                        <div class="text-center">
                            <div
                                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white"
                            >
                                1
                            </div>
                            <h3 class="mt-6 text-xl font-semibold text-neutral-900">
                                Community Identification
                            </h3>
                            <p class="mt-3 text-neutral-600">
                                We identify communities with limited access to education and partner
                                with local leaders to understand their needs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" :delay="100">
                        <div class="text-center">
                            <div
                                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white"
                            >
                                2
                            </div>
                            <h3 class="mt-6 text-xl font-semibold text-neutral-900">
                                School Setup
                            </h3>
                            <p class="mt-3 text-neutral-600">
                                We establish or renovate learning spaces, recruit qualified
                                teachers, and source educational materials.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" :delay="200">
                        <div class="text-center">
                            <div
                                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white"
                            >
                                3
                            </div>
                            <h3 class="mt-6 text-xl font-semibold text-neutral-900">
                                Ongoing Support
                            </h3>
                            <p class="mt-3 text-neutral-600">
                                We provide continuous support including teacher training, meals,
                                supplies, and regular progress monitoring.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <CTABanner
            title="Support Free Education"
            description="Help us provide quality education to more children. Your support can change lives."
            primary-button-text="Volunteer Now"
            primary-button-link="/volunteer"
            secondary-button-text="Learn About Other Programs"
            secondary-button-link="/programs"
        />
    </AppLayout>
</template>
