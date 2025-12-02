<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import { useDarkMode } from '@/composables/useDarkMode'

interface Props {
    headerTransparent?: boolean
}

withDefaults(defineProps<Props>(), {
    headerTransparent: true,
})

const { initDarkMode } = useDarkMode()

onMounted(() => {
    initDarkMode()
})
</script>

<template>
    <div class="min-h-screen bg-white transition-colors duration-300">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
