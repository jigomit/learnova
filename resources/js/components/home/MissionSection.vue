<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
    <section class="bg-neutral-50 py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <!-- Image -->
                <ScrollReveal animation="fade-right" class="order-2 lg:order-1">
                    <div class="relative">
                        <div
                            class="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-200/60 to-primary-200/60"
                        ></div>
                        <div
                            class="absolute -bottom-4 -right-4 h-48 w-48 rounded-full bg-accent-cyan/20"
                        ></div>
                        <div
                            class="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-violet-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
                                alt="Teacher helping students learn"
                                class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent"></div>
                        </div>
                        <!-- Decorative accent -->
                        <div class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-accent-purple/30 blur-2xl"></div>
                    </div>
                </ScrollReveal>

                <!-- Content -->
                <div class="order-1 lg:order-2">
                    <ScrollReveal animation="fade-left">
                        <span
                            class="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700"
                        >
                            Our Mission
                        </span>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left" :delay="100">
                        <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                            Education is the Most Powerful Weapon
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left" :delay="200">
                        <p class="mt-6 text-lg text-neutral-600">
                            We believe every child, regardless of their background, deserves access
                            to quality education. Our mission is to break down barriers and create
                            opportunities for underprivileged children to learn, grow, and thrive.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left" :delay="300">
                        <ul class="mt-8 space-y-4">
                            <li class="flex items-start gap-3">
                                <div
                                    class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100"
                                >
                                    <svg
                                        class="h-4 w-4 text-primary-600"
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
                                <span class="text-neutral-700">
                                    <strong>Free Quality Education</strong> - No child should be
                                    denied education due to financial constraints
                                </span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div
                                    class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100"
                                >
                                    <svg
                                        class="h-4 w-4 text-primary-600"
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
                                <span class="text-neutral-700">
                                    <strong>Digital Inclusion</strong> - Bridging the digital divide
                                    with accessible e-learning resources
                                </span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div
                                    class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100"
                                >
                                    <svg
                                        class="h-4 w-4 text-primary-600"
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
                                <span class="text-neutral-700">
                                    <strong>Community Support</strong> - Building a global network of
                                    educators and supporters
                                </span>
                            </li>
                        </ul>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
</template>
