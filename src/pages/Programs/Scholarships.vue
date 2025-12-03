<script setup lang="ts">

import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import { getProgram } from '@/data/programs'

const program = getProgram('scholarships')!
</script>

<template>

    <AppLayout>
        <PageHero
            title="Scholarships"
            subtitle="Financial support for deserving students to pursue higher education."
            background-image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200"
        />

        <!-- Overview -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal animation="fade-right">
                        <div class="relative">
                            <!-- Decorative background -->
                            <div class="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-coral-200/50 to-rose-200/50"></div>
                            <div class="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-coral-100">
                                <img
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600"
                                    alt="University graduation ceremony"
                                    class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-coral-900/60 via-transparent to-transparent"></div>
                                <!-- Icon overlay -->
                                <div class="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-coral-600 shadow-lg">
                                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                            </div>
                            <!-- Decorative accent -->
                            <div class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-accent-pink/30 blur-2xl"></div>
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal animation="fade-left">
                            <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                                Investing in Future Leaders
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" :delay="100">
                            <p class="mt-6 text-lg text-neutral-600">
                                {{ program.description }}
                            </p>
                            <p class="mt-4 text-lg text-neutral-600">
                                We believe that talent is universal, but opportunity is not. Our
                                scholarship program identifies exceptional students and provides
                                them with the support they need to achieve their dreams.
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
                                    <div class="text-3xl font-bold text-coral-600">
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

        <!-- What We Offer -->
        <section class="bg-neutral-50 py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        What Scholars Receive
                    </h2>
                    <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Comprehensive support to ensure academic success.
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
                                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-100 text-coral-600"
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

        <!-- Eligibility -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Eligibility Criteria
                    </h2>
                </ScrollReveal>

                <div class="mt-16 grid gap-8 md:grid-cols-2">
                    <ScrollReveal animation="fade-right">
                        <div class="rounded-2xl border border-neutral-200 p-8">
                            <h3 class="text-xl font-bold text-neutral-900">Requirements</h3>
                            <ul class="mt-4 space-y-3">
                                <li
                                    v-for="requirement in [
                                        'Demonstrated financial need',
                                        'Strong academic performance',
                                        'Commitment to community service',
                                        'Acceptance to an accredited institution',
                                        'Letter of recommendation',
                                    ]"
                                    :key="requirement"
                                    class="flex items-center gap-3 text-neutral-600"
                                >
                                    <svg
                                        class="h-5 w-5 flex-shrink-0 text-coral-500"
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
                                    {{ requirement }}
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left" :delay="100">
                        <div class="rounded-2xl border border-neutral-200 p-8">
                            <h3 class="text-xl font-bold text-neutral-900">Application Process</h3>
                            <ol class="mt-4 space-y-3">
                                <li
                                    v-for="(step, index) in [
                                        'Submit online application form',
                                        'Provide academic transcripts',
                                        'Write personal essay',
                                        'Interview with selection committee',
                                        'Final selection and notification',
                                    ]"
                                    :key="step"
                                    class="flex items-start gap-3 text-neutral-600"
                                >
                                    <span
                                        class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-coral-100 text-sm font-semibold text-coral-600"
                                    >
                                        {{ index + 1 }}
                                    </span>
                                    {{ step }}
                                </li>
                            </ol>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <CTABanner
            title="Apply for a Scholarship"
            description="Take the first step toward your educational dreams. Applications are open year-round."
            primary-button-text="Contact Us to Apply"
            primary-button-link="/contact"
            secondary-button-text="View All Programs"
            secondary-button-link="/programs"
        />
    </AppLayout>
</template>
