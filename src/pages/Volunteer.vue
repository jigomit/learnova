<script setup lang="ts">

import { ref } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import PageHero from '@/components/shared/PageHero.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import { getProgram } from '@/data/programs'

const program = getProgram('volunteer-teachers')!

const formData = ref({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    availability: '',
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
        phone: '',
        expertise: '',
        availability: '',
        message: '',
    }
}
</script>

<template>

    <AppLayout>
        <PageHero
            title="Become a Volunteer"
            subtitle="Share your knowledge and passion to help children reach their full potential."
            background-image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200"
        />

        <!-- Why Volunteer -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <ScrollReveal animation="fade-right">
                            <span
                                class="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700"
                            >
                                Make an Impact
                            </span>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-right" :delay="100">
                            <h2 class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
                                Why Volunteer With Us?
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-right" :delay="200">
                            <p class="mt-6 text-lg text-neutral-600">
                                {{ program.description }}
                            </p>
                        </ScrollReveal>

                        <!-- Benefits -->
                        <ScrollReveal animation="fade-right" :delay="300">
                            <ul class="mt-8 space-y-4">
                                <li
                                    v-for="feature in program.features"
                                    :key="feature"
                                    class="flex items-start gap-3"
                                >
                                    <div
                                        class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100"
                                    >
                                        <svg
                                            class="h-4 w-4 text-secondary-600"
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
                                    <span class="text-neutral-700">{{ feature }}</span>
                                </li>
                            </ul>
                        </ScrollReveal>

                        <!-- Stats -->
                        <ScrollReveal animation="fade-right" :delay="400">
                            <div class="mt-8 grid grid-cols-3 gap-6">
                                <div
                                    v-for="stat in program.stats"
                                    :key="stat.label"
                                    class="text-center"
                                >
                                    <div class="text-2xl font-bold text-primary-600">
                                        {{ stat.value }}
                                    </div>
                                    <div class="mt-1 text-sm text-neutral-500">
                                        {{ stat.label }}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal animation="fade-left">
                        <div class="relative">
                            <!-- Decorative background -->
                            <div class="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-200/50 to-purple-200/50"></div>
                            <div class="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-violet-100">
                                <img
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600"
                                    alt="Teacher helping young students"
                                    class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent"></div>
                                <!-- Icon overlay -->
                                <div class="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-violet-600 shadow-lg">
                                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <!-- Decorative accent -->
                            <div class="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-accent-purple/30 blur-2xl"></div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <!-- Volunteer Form -->
        <section class="bg-neutral-50 py-20 lg:py-28">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Apply to Volunteer
                    </h2>
                    <p class="mt-4 text-lg text-neutral-600">
                        Fill out the form below and our team will get in touch with you.
                    </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" :delay="100">
                    <div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
                        <!-- Success Message -->
                        <div
                            v-if="isSubmitted"
                            class="rounded-xl bg-secondary-50 p-6 text-center"
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
                            <h3 class="text-xl font-bold text-neutral-900">
                                Thank You for Your Interest!
                            </h3>
                            <p class="mt-2 text-neutral-600">
                                We've received your application and will contact you soon.
                            </p>
                            <button
                                @click="isSubmitted = false"
                                class="mt-4 text-primary-600 hover:text-primary-700"
                            >
                                Submit another application
                            </button>
                        </div>

                        <!-- Form -->
                        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                            <div class="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        v-model="formData.name"
                                        type="text"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
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
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div class="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        v-model="formData.phone"
                                        type="tel"
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                                <div>
                                    <label
                                        for="expertise"
                                        class="block text-sm font-medium text-neutral-700"
                                    >
                                        Area of Expertise *
                                    </label>
                                    <select
                                        id="expertise"
                                        v-model="formData.expertise"
                                        required
                                        class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                    >
                                        <option value="">Select an area</option>
                                        <option value="mathematics">Mathematics</option>
                                        <option value="science">Science</option>
                                        <option value="english">English/Languages</option>
                                        <option value="arts">Arts & Music</option>
                                        <option value="technology">Technology</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    for="availability"
                                    class="block text-sm font-medium text-neutral-700"
                                >
                                    Availability *
                                </label>
                                <select
                                    id="availability"
                                    v-model="formData.availability"
                                    required
                                    class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                >
                                    <option value="">Select your availability</option>
                                    <option value="few-hours-week">A few hours per week</option>
                                    <option value="one-day-week">One day per week</option>
                                    <option value="multiple-days">Multiple days per week</option>
                                    <option value="full-time">Full-time commitment</option>
                                    <option value="online-only">Online only</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    for="message"
                                    class="block text-sm font-medium text-neutral-700"
                                >
                                    Tell Us About Yourself
                                </label>
                                <textarea
                                    id="message"
                                    v-model="formData.message"
                                    rows="4"
                                    class="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="Share your motivation to volunteer and any relevant experience..."
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
                                    Submitting...
                                </span>
                                <span v-else>Submit Application</span>
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="bg-white py-20 lg:py-28">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal animation="fade-up" class="text-center">
                    <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" :delay="100">
                    <div class="mt-12 space-y-6">
                        <div
                            v-for="(faq, index) in [
                                {
                                    question: 'Do I need teaching experience?',
                                    answer: 'While teaching experience is helpful, it is not required. We provide training and support to all volunteers. What matters most is your passion for education and willingness to learn.',
                                },
                                {
                                    question: 'How much time do I need to commit?',
                                    answer: 'We offer flexible volunteering options. You can contribute a few hours per week or commit to a more regular schedule. We work with you to find an arrangement that fits your availability.',
                                },
                                {
                                    question: 'Can I volunteer remotely?',
                                    answer: 'Yes! We have online teaching opportunities where you can connect with students virtually from anywhere in the world.',
                                },
                                {
                                    question: 'What subjects can I teach?',
                                    answer: 'We welcome volunteers for all subjects including mathematics, science, languages, arts, technology, and life skills. You can teach what you are passionate about.',
                                },
                            ]"
                            :key="index"
                            class="rounded-xl border border-neutral-200 p-6"
                        >
                            <h3 class="text-lg font-semibold text-neutral-900">
                                {{ faq.question }}
                            </h3>
                            <p class="mt-2 text-neutral-600">{{ faq.answer }}</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </AppLayout>
</template>
