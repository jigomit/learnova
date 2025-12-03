<script setup lang="ts">

import AppLayout from '@/components/layout/AppLayout.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import { teamMembers, milestones } from '@/data/team'
</script>

<template>

    <AppLayout>
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
            <!-- Background Image -->
            <div class="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200"
                    alt="Hands joined together - community support"
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
                        About Us
                    </h1>
                    <p
                        class="animate-fade-in-up animation-delay-100 mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
                    >
                        Our story of hope, dedication, and the belief that education can transform lives.
                    </p>
                </div>
            </div>
        </section>

        <!-- Our Story Section -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal animation="fade-right">
                        <div class="relative">
                            <!-- Decorative background circle -->
                            <div
                                class="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-200/60 to-primary-200/60"
                            ></div>
                            <!-- Image -->
                            <div
                                class="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-violet-100"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600"
                                    alt="Students in classroom learning"
                                    class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <!-- Decorative accent -->
                            <div class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-accent-cyan/30 blur-2xl"></div>
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal animation="fade-left">
                            <span
                                class="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700"
                            >
                                Our Story
                            </span>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" :delay="100">
                            <h2
                                class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl"
                            >
                                From One Classroom to a Global Movement
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" :delay="200">
                            <div class="mt-6 space-y-4 text-lg text-neutral-600">
                                <p>
                                    Learnova began in 2010 with a simple belief: every child deserves
                                    the opportunity to learn. What started as a single classroom
                                    with 30 students in a rural village has grown into a global
                                    movement touching thousands of lives.
                                </p>
                                <p>
                                    Our founder, Dr. Sarah Johnson, witnessed firsthand the
                                    transformative power of education while working in underserved
                                    communities. She saw brilliant minds held back not by lack of
                                    ability, but by lack of opportunity.
                                </p>
                                <p>
                                    Today, we operate in 12 countries, supporting over 10,000
                                    students through our various programs. But our mission remains
                                    the same: to break down barriers and create pathways to
                                    education for every child.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission & Vision -->
        <section class="bg-gradient-section py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Our Mission & Vision
                    </h2>
                </ScrollReveal>

                <div class="mt-12 grid gap-8 md:grid-cols-2">
                    <ScrollReveal animation="fade-right" :delay="100">
                        <div class="group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <!-- Image Header -->
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400"
                                    alt="Student studying with books"
                                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-800/50 to-transparent"></div>
                                <div
                                    class="absolute bottom-4 left-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-violet-600 shadow-lg"
                                >
                                    <svg
                                        class="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <!-- Content -->
                            <div class="p-8">
                                <h3 class="text-2xl font-bold text-neutral-900">Our Mission</h3>
                                <p class="mt-4 text-neutral-600">
                                    To provide free, quality education to underprivileged children
                                    worldwide, empowering them with knowledge, skills, and opportunities
                                    to build better futures for themselves and their communities.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left" :delay="200">
                        <div class="group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <!-- Image Header -->
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400"
                                    alt="Happy students celebrating success"
                                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/50 to-transparent"></div>
                                <div
                                    class="absolute bottom-4 left-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-lg"
                                >
                                    <svg
                                        class="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <!-- Content -->
                            <div class="p-8">
                                <h3 class="text-2xl font-bold text-neutral-900">Our Vision</h3>
                                <p class="mt-4 text-neutral-600">
                                    A world where every child, regardless of their socioeconomic
                                    background, has equal access to quality education and the
                                    opportunity to reach their full potential.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <!-- Timeline -->
        <section class="bg-neutral-50 py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <span
                        class="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700"
                    >
                        Our Journey
                    </span>
                    <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Milestones Along the Way
                    </h2>
                </ScrollReveal>

                <div class="relative mt-12">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-violet-300 via-primary-400 to-violet-300 md:left-1/2 md:-translate-x-1/2"
                    ></div>

                    <div class="space-y-12">
                        <ScrollReveal
                            v-for="(milestone, index) in milestones"
                            :key="milestone.year"
                            :animation="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                            :delay="index * 100"
                        >
                            <div
                                :class="[
                                    'relative flex items-center',
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                                ]"
                            >
                                <!-- Content -->
                                <div
                                    :class="[
                                        'ml-12 md:ml-0 md:w-1/2',
                                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12',
                                    ]"
                                >
                                    <div class="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <span
                                            class="inline-block rounded-full bg-gradient-to-r from-violet-600 to-primary-600 px-3 py-1 text-sm font-semibold text-white"
                                        >
                                            {{ milestone.year }}
                                        </span>
                                        <h3 class="mt-3 text-xl font-bold text-neutral-900">
                                            {{ milestone.title }}
                                        </h3>
                                        <p class="mt-2 text-neutral-600">
                                            {{ milestone.description }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Dot -->
                                <div
                                    class="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-violet-200 bg-white md:left-1/2 md:-translate-x-1/2"
                                >
                                    <div class="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-primary-500"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <span
                        class="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700"
                    >
                        Our Team
                    </span>
                    <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Meet the People Behind Learnova
                    </h2>
                    <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Dedicated individuals working together to make education accessible to all.
                    </p>
                </ScrollReveal>

                <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <ScrollReveal
                        v-for="(member, index) in teamMembers"
                        :key="member.id"
                        animation="fade-up"
                        :delay="index * 100"
                    >
                        <div
                            class="group overflow-hidden rounded-2xl bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white"
                        >
                            <!-- Avatar -->
                            <div class="relative mx-auto h-32 w-32 sm:h-36 sm:w-36">
                                <!-- Image avatar with fallback to initials -->
                                <div
                                    v-if="member.avatar"
                                    class="h-full w-full overflow-hidden rounded-full border-4 border-violet-100 shadow-md transition-all duration-300 group-hover:border-violet-500 group-hover:shadow-xl group-hover:scale-105"
                                >
                                    <img
                                        :src="member.avatar"
                                        :alt="member.name"
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                                <!-- Initial avatar fallback -->
                                <div
                                    v-else
                                    class="flex h-full w-full items-center justify-center rounded-full border-4 border-violet-100 bg-gradient-to-br from-violet-100 to-primary-100 text-violet-600 shadow-md transition-all duration-300 group-hover:border-violet-500 group-hover:from-violet-500 group-hover:to-primary-500 group-hover:text-white group-hover:shadow-xl group-hover:scale-105"
                                >
                                    <span class="text-4xl font-bold">
                                        {{ member.name.charAt(0) }}
                                    </span>
                                </div>
                            </div>

                            <!-- Info -->
                            <div class="mt-6 text-center">
                                <h3 class="text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-violet-600">
                                    {{ member.name }}
                                </h3>
                                <p class="mt-1 text-sm font-medium text-violet-600">
                                    {{ member.role }}
                                </p>
                                <p class="mt-3 text-neutral-600 leading-relaxed">
                                    {{ member.bio }}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <CTABanner
            title="Join Our Team"
            description="We're always looking for passionate individuals to join our mission. Whether as a volunteer, donor, or team member."
            primary-button-text="View Opportunities"
            primary-button-link="/volunteer"
            secondary-button-text="Contact Us"
            secondary-button-link="/contact"
        />
    </AppLayout>
</template>
