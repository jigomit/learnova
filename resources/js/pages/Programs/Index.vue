<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
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
    const colors: Record<string, { bg: string; text: string; bgLight: string }> = {
        primary: {
            bg: 'bg-primary-600',
            text: 'text-primary-600',
            bgLight: 'bg-primary-100',
        },
        'accent-green': {
            bg: 'bg-secondary-500',
            text: 'text-secondary-500',
            bgLight: 'bg-secondary-100',
        },
        'accent-yellow': {
            bg: 'bg-coral-500',
            text: 'text-coral-600',
            bgLight: 'bg-coral-100',
        },
        'accent-purple': {
            bg: 'bg-violet-500',
            text: 'text-violet-500',
            bgLight: 'bg-violet-100',
        },
    }
    return colors[color] || colors.primary
}
</script>

<template>
    <Head title="Our Programs">
        <meta
            name="description"
            content="Explore Learnova's programs: Free Schooling, E-Learning Resources, Scholarships, and Volunteer Teacher opportunities."
        />
    </Head>

    <AppLayout>
        <PageHero
            title="Our Programs"
            subtitle="Comprehensive educational support through multiple programs designed to meet diverse needs."
            background-image="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200"
        />

        <!-- Programs Grid -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Explore Our Programs
                    </h2>
                    <p class="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
                        We offer comprehensive educational support through multiple programs designed to meet diverse needs.
                    </p>
                </ScrollReveal>

                <!-- 4 Card Grid -->
                <div class="grid gap-8 md:grid-cols-2">
                    <ScrollReveal
                        v-for="(program, index) in programs"
                        :key="program.id"
                        animation="fade-up"
                        :delay="index * 100"
                    >
                        <div class="group h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-xl">
                            <!-- Image -->
                            <div class="relative h-56 overflow-hidden">
                                <img
                                    :src="program.image"
                                    :alt="program.title"
                                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <!-- Icon overlay -->
                                <div
                                    :class="[
                                        'absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg',
                                        getColorClasses(program.color).text,
                                    ]"
                                >
                                    <svg
                                        class="h-6 w-6"
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
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-neutral-900">
                                    {{ program.title }}
                                </h3>

                                <p class="mt-3 text-neutral-600 line-clamp-3">
                                    {{ program.shortDescription }}
                                </p>

                                <!-- Stats -->
                                <div
                                    v-if="program.stats"
                                    class="mt-5 flex gap-4 border-t border-neutral-100 pt-5"
                                >
                                    <div
                                        v-for="stat in program.stats.slice(0, 3)"
                                        :key="stat.label"
                                        class="text-center flex-1"
                                    >
                                        <div
                                            :class="[
                                                'text-lg font-bold',
                                                getColorClasses(program.color).text,
                                            ]"
                                        >
                                            {{ stat.value }}
                                        </div>
                                        <div class="text-xs text-neutral-500">
                                            {{ stat.label }}
                                        </div>
                                    </div>
                                </div>

                                <!-- CTA -->
                                <Link
                                    :href="program.href"
                                    :class="[
                                        'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-white transition-all hover:shadow-lg',
                                        getColorClasses(program.color).bg,
                                    ]"
                                >
                                    Learn More
                                    <svg
                                        class="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <CTABanner
            title="Ready to Get Involved?"
            description="Whether you want to volunteer, donate, or learn more about our programs, we'd love to hear from you."
            primary-button-text="Contact Us"
            primary-button-link="/contact"
            secondary-button-text="Become a Volunteer"
            secondary-button-link="/volunteer"
        />
    </AppLayout>
</template>
