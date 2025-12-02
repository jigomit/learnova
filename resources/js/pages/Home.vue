<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/components/layout/AppLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import ImpactStats from '@/components/home/ImpactStats.vue'
import FeaturedPrograms from '@/components/home/FeaturedPrograms.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
</script>

<template>
    <Head title="Free Education for Underprivileged Children">
        <meta
            name="description"
            content="Learnova provides free schooling, e-learning resources, scholarships, and volunteer teacher programs to underprivileged children worldwide."
        />
    </Head>

    <AppLayout>
        <HeroSection />
        <MissionSection />
        <ImpactStats />
        <FeaturedPrograms />
        <TestimonialsSection />
        <CTABanner
            title="Ready to Make a Difference?"
            description="Join thousands of volunteers and donors who are helping us transform lives through education."
            primary-button-text="Become a Volunteer"
            primary-button-link="/volunteer"
            secondary-button-text="Contact Us"
            secondary-button-link="/contact"
        />
    </AppLayout>
</template>
