<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { getBlogPost } from '@/data/blog'
import { useSeo } from '@/composables/useSeo'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => getBlogPost(slug.value))

useSeo({
    title: computed(() => post.value?.title || 'Blog Post'),
    description: computed(() => post.value?.excerpt || 'Read this article on Learnova blog.'),
    image: computed(() => post.value?.image || ''),
    url: computed(() => `https://learnova.org/blog/${slug.value}`),
    type: 'article',
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
        <!-- Article -->
        <article v-if="post" class="bg-white">
            <!-- Header Section -->
            <header class="bg-gradient-to-b from-primary-50 to-white pt-32 pb-12 lg:pt-40 lg:pb-16">
                <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <!-- Back Button -->
                    <ScrollReveal animation="fade-up">
                        <RouterLink
                            to="/blog"
                            class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                        >
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </RouterLink>
                    </ScrollReveal>

                    <!-- Title -->
                    <ScrollReveal animation="fade-up" :delay="100">
                        <h1 class="mt-8 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                            {{ post.title }}
                        </h1>
                    </ScrollReveal>

                    <!-- Date -->
                    <ScrollReveal animation="fade-up" :delay="200">
                        <time
                            :datetime="post.publishedAt"
                            class="mt-6 block text-neutral-500"
                        >
                            {{ formatDate(post.publishedAt) }}
                        </time>
                    </ScrollReveal>
                </div>
            </header>

            <!-- Featured Image -->
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up">
                    <div class="relative -mt-8 overflow-hidden rounded-2xl shadow-xl">
                        <img
                            :src="post.image"
                            :alt="post.imageAlt"
                            class="w-full object-cover"
                            style="max-height: 500px;"
                        />
                    </div>
                </ScrollReveal>
            </div>

            <!-- Article Content -->
            <div class="py-12 lg:py-16">
                <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal animation="fade-up">
                        <!-- Article Body -->
                        <div class="prose prose-lg prose-neutral max-w-none">
                            <div v-html="post.content"></div>
                        </div>
                    </ScrollReveal>

                    <!-- Back to Blog Button (Bottom) -->
                    <ScrollReveal animation="fade-up" :delay="100">
                        <div class="mt-16 border-t border-neutral-200 pt-8">
                            <RouterLink
                                to="/blog"
                                class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
                            >
                                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Blog
                            </RouterLink>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </article>

        <!-- 404 State -->
        <section v-else class="bg-white py-32">
            <div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <svg class="mx-auto h-16 w-16 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 class="mt-6 text-3xl font-bold text-neutral-900">Post Not Found</h1>
                <p class="mt-4 text-neutral-600">The blog post you're looking for doesn't exist or has been removed.</p>
                <RouterLink
                    to="/blog"
                    class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </RouterLink>
            </div>
        </section>
    </AppLayout>
</template>

<style scoped>
/* Clean prose styles for article content */
.prose :deep(h2) {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #171717;
}

.prose :deep(h3) {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #171717;
}

.prose :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
    color: #525252;
}

.prose :deep(ul) {
    margin: 1rem 0;
    margin-left: 1.5rem;
    list-style-type: disc;
}

.prose :deep(ul li) {
    margin-bottom: 0.5rem;
    color: #525252;
}

.prose :deep(ol) {
    margin: 1rem 0;
    margin-left: 1.5rem;
    list-style-type: decimal;
}

.prose :deep(ol li) {
    margin-bottom: 0.5rem;
    color: #525252;
}

.prose :deep(a) {
    color: #4f46e5;
    text-decoration: underline;
}

.prose :deep(a:hover) {
    color: #4338ca;
}

.prose :deep(strong) {
    font-weight: 600;
    color: #171717;
}

.prose :deep(blockquote) {
    margin: 1.5rem 0;
    border-left: 4px solid #6366f1;
    padding-left: 1rem;
    font-style: italic;
    color: #525252;
}

.prose :deep(img) {
    margin: 1.5rem 0;
    border-radius: 0.5rem;
}

.prose :deep(code) {
    background-color: #f5f5f5;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: #262626;
}

.prose :deep(pre) {
    margin: 1rem 0;
    padding: 1rem;
    overflow-x: auto;
    border-radius: 0.5rem;
    background-color: #171717;
    font-size: 0.875rem;
    color: #f5f5f5;
}
</style>
