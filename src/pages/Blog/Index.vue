<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { blogPosts } from '@/data/blog'
import { useSeo } from '@/composables/useSeo'

useSeo({
    title: 'Blog',
    description: 'Read stories, tips, and updates from Learnova. Learn about education initiatives, volunteer experiences, and the impact of free education worldwide.',
    url: 'https://learnova.org/blog',
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>

<template>

    <AppLayout>
        <!-- Hero Section - Clean & Minimal -->
        <section class="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up">
                    <h1 class="text-4xl font-bold text-neutral-900 sm:text-5xl">
                        Blog
                    </h1>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" :delay="100">
                    <p class="mt-4 text-lg text-neutral-600">
                        Stories, tips & updates from our rescue community
                    </p>
                </ScrollReveal>
            </div>
        </section>

        <!-- Blog Posts - Clean Grid -->
        <section class="bg-white py-16 lg:py-24">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <ScrollReveal
                        v-for="(post, index) in blogPosts"
                        :key="post.id"
                        animation="fade-up"
                        :delay="index * 50"
                    >
                        <article class="group h-full">
                            <RouterLink :to="`/blog/${post.slug}`" class="block h-full">
                                <div class="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:border-primary-200 hover:shadow-lg">
                                    <!-- Image -->
                                    <div class="relative h-48 overflow-hidden">
                                        <img
                                            :src="post.image"
                                            :alt="post.imageAlt"
                                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col p-6">
                                        <!-- Date -->
                                        <time
                                            :datetime="post.publishedAt"
                                            class="text-sm text-neutral-500"
                                        >
                                            {{ formatDate(post.publishedAt) }}
                                        </time>

                                        <!-- Title -->
                                        <h2 class="mt-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-primary-600 line-clamp-2">
                                            {{ post.title }}
                                        </h2>

                                        <!-- Excerpt -->
                                        <p class="mt-3 flex-1 text-neutral-600 line-clamp-2">
                                            {{ post.excerpt }}
                                        </p>

                                        <!-- Read More Button -->
                                        <div class="mt-6">
                                            <span class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-all duration-300">
                                                Read More
                                                <svg
                                                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </article>
                    </ScrollReveal>
                </div>

                <!-- Empty State -->
                <div v-if="blogPosts.length === 0" class="py-16 text-center">
                    <svg class="mx-auto h-12 w-12 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-neutral-900">No posts yet</h3>
                    <p class="mt-2 text-neutral-500">Check back soon for updates.</p>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
