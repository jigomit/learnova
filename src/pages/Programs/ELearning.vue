<script setup lang="ts">

import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import { getProgram } from '@/data/programs'

const program = getProgram('e-learning')!
</script>

<template>

    <AppLayout>
        <PageHero
            title="E-Learning Resources"
            subtitle="Digital education tools accessible anytime, anywhere."
            background-image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
        />

        <!-- Overview -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal animation="fade-right">
                        <div class="relative">
                            <!-- Decorative background -->
                            <div class="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-teal-200/50 to-cyan-200/50"></div>
                            <div class="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-teal-100">
                                <img
                                    src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600"
                                    alt="Person using tablet for learning"
                                    class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
                                <!-- Icon overlay -->
                                <div class="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-teal-600 shadow-lg">
                                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                                Bridging the Digital Divide
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" :delay="100">
                            <p class="mt-6 text-lg text-neutral-600">
                                {{ program.description }}
                            </p>
                            <p class="mt-4 text-lg text-neutral-600">
                                Our platform is designed with accessibility in mind—it works on
                                low-bandwidth connections, supports multiple languages, and can be
                                accessed offline once content is downloaded.
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
                                    <div class="text-3xl font-bold text-teal-600">
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

        <!-- Platform Features -->
        <section class="bg-neutral-50 py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Platform Features
                    </h2>
                    <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Everything students need to learn effectively online.
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
                                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600"
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

        <!-- Course Categories -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        What Students Can Learn
                    </h2>
                </ScrollReveal>

                <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <ScrollReveal
                        v-for="(category, index) in [
                            { name: 'Mathematics', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
                            { name: 'Science', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                            { name: 'Languages', icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
                            { name: 'Life Skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                        ]"
                        :key="category.name"
                        animation="fade-up"
                        :delay="index * 100"
                    >
                        <div
                            class="rounded-2xl border border-neutral-200 p-6 text-center transition-all hover:border-teal-300 hover:shadow-md"
                        >
                            <div
                                class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-600"
                            >
                                <svg
                                    class="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        :d="category.icon"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-neutral-900">
                                {{ category.name }}
                            </h3>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <CTABanner
            title="Start Learning Today"
            description="Access thousands of free educational resources and start your learning journey."
            primary-button-text="Contact Us"
            primary-button-link="/contact"
            secondary-button-text="View All Programs"
            secondary-button-link="/programs"
        />
    </AppLayout>
</template>
