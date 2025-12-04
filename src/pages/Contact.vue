<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
    title: 'Contact Us',
    description: 'Get in touch with Learnova. Contact us about volunteering, donations, partnerships, or to learn more about our free education programs.',
    url: 'https://learnova.org/contact',
})

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const handleSubmit = async () => {
    isSubmitting.value = true
    error.value = ''

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    isSubmitted.value = true
    isSubmitting.value = false
    formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
}
</script>

<template>

    <AppLayout>
        <PageHero
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out to learn more about our programs or get involved."
            background-image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        />

        <!-- Contact Section -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <!-- Contact Info -->
                    <ScrollReveal animation="fade-right">
                        <div>
                            <h2 class="text-3xl font-bold text-neutral-900">Get in Touch</h2>
                            <p class="mt-4 text-lg text-neutral-600">
                                Whether you want to volunteer, donate, partner with us, or simply
                                learn more about our work, we're here to help.
                            </p>

                            <!-- Contact Details -->
                            <div class="mt-10 space-y-6">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600"
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-neutral-900">Address</h3>
                                        <p class="mt-1 text-neutral-600">
                                            123 Education Street<br />
                                            New Delhi, India 110001
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600"
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
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-neutral-900">Email</h3>
                                        <a
                                            href="mailto:info@learnova.org"
                                            class="mt-1 text-primary-600 hover:text-primary-700"
                                        >
                                            info@learnova.org
                                        </a>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600"
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
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-neutral-900">Phone</h3>
                                        <a
                                            href="tel:+911234567890"
                                            class="mt-1 text-primary-600 hover:text-primary-700"
                                        >
                                            +91 123 456 7890
                                        </a>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600"
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
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-neutral-900">Office Hours</h3>
                                        <p class="mt-1 text-neutral-600">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Social Links -->
                            <div class="mt-10">
                                <h3 class="font-semibold text-neutral-900">Follow Us</h3>
                                <div class="mt-4 flex gap-4">
                                    <a
                                        href="https://facebook.com/learnova"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                                        aria-label="Facebook"
                                    >
                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/learnova"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                                        aria-label="Twitter"
                                    >
                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://instagram.com/learnova"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                                        aria-label="Instagram"
                                    >
                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://linkedin.com/company/learnova"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                                        aria-label="LinkedIn"
                                    >
                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <!-- Contact Form -->
                    <ScrollReveal animation="fade-left">
                        <div class="rounded-2xl bg-neutral-50 p-8">
                            <h3 class="text-2xl font-bold text-neutral-900">Send Us a Message</h3>
                            <p class="mt-2 text-neutral-600">
                                Fill out the form and we'll get back to you as soon as possible.
                            </p>

                            <!-- Success Message -->
                            <div
                                v-if="isSubmitted"
                                class="mt-6 rounded-xl bg-secondary-50 p-6 text-center"
                            >
                                <div
                                    class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100"
                                >
                                    <svg
                                        class="h-8 w-8 text-secondary-600"
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
                                <h4 class="text-xl font-bold text-neutral-900">
                                    Message Sent!
                                </h4>
                                <p class="mt-2 text-neutral-600">
                                    Thank you for reaching out. We'll respond within 24-48 hours.
                                </p>
                                <button
                                    @click="isSubmitted = false"
                                    class="mt-4 text-primary-600 hover:text-primary-700"
                                >
                                    Send another message
                                </button>
                            </div>

                            <!-- Form -->
                            <form v-else @submit.prevent="handleSubmit" class="mt-6 space-y-6">
                                <div>
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Your Name *
                                    </label>
                                    <input
                                        id="name"
                                        v-model="formData.name"
                                        type="text"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label
                                        for="email"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        v-model="formData.email"
                                        type="email"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        for="subject"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        v-model="formData.subject"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="volunteer">Volunteering</option>
                                        <option value="donation">Donations</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="scholarship">Scholarship Information</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        for="message"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        v-model="formData.message"
                                        rows="5"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <div v-if="error" class="rounded-lg bg-red-50 p-4 text-red-600">
                                    {{ error }}
                                </div>

                                <button
                                    type="submit"
                                    :disabled="isSubmitting"
                                    class="w-full rounded-lg bg-primary-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                                        <svg
                                            class="h-5 w-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                class="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                stroke-width="4"
                                            ></circle>
                                            <path
                                                class="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </span>
                                    <span v-else>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <!-- Location Image Section -->
        <section class="bg-neutral-100 py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up">
                    <div class="relative overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"
                            alt="Education and learning environment"
                            class="h-96 w-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-r from-violet-900/80 via-primary-900/60 to-transparent"></div>
                        <div class="absolute inset-0 flex items-center">
                            <div class="px-8 lg:px-12">
                                <h3 class="text-2xl font-bold text-white sm:text-3xl">Visit Our Centers</h3>
                                <p class="mt-3 max-w-md text-white/90">
                                    We have education centers across multiple locations. Get in touch to find the nearest one.
                                </p>
                                <div class="mt-6 flex items-center gap-3 text-white">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Education Street, New Delhi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </AppLayout>
</template>
