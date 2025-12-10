<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import ImpactStats from '@/components/home/ImpactStats.vue'
import FeaturedPrograms from '@/components/home/FeaturedPrograms.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
    title: 'Home',
    description: 'Learnova provides free education for underprivileged children worldwide. Access free schooling programs, online learning resources, scholarships for low-income students, and volunteer teaching opportunities.',
    url: 'https://learnova.org',
})
</script>

<template>
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
