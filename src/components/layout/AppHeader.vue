<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { mainNavigation } from '@/data/navigation'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
}

const toggleDropdown = (label: string) => {
    activeDropdown.value = activeDropdown.value === label ? null : label
}
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <!-- Header with Glassmorphism Effect -->
        <div
            :class="[
                'relative transition-all duration-500',
isScrolled
                    ? 'bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg shadow-neutral-900/5 dark:shadow-black/20'
                    : 'bg-transparent',
            ]"
        >
            <!-- Gradient Border at Bottom (when scrolled) -->
            <div
                :class="[
                    'absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 transition-opacity duration-500',
                    isScrolled ? 'opacity-100' : 'opacity-0',
                ]"
            ></div>

            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between lg:h-20">
                    <!-- Logo with Glow/Pulse Effect -->
                    <RouterLink to="/" class="group flex items-center gap-2">
                        <div class="relative">
                            <!-- Glow Effect -->
                            <div
                                class="absolute inset-0 rounded-lg bg-primary-600 opacity-75 blur-md animate-pulse"
                            ></div>
                            <!-- Logo -->
                            <div
                                class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 shadow-lg shadow-primary-600/50 transition-all duration-300 group-hover:shadow-primary-600/70 group-hover:scale-110"
                            >
                                <svg
                                    class="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span
:class="[
                                'text-lg font-bold transition-colors duration-300',
                                isScrolled ? 'text-neutral-900 dark:text-white' : 'text-white',
                            ]"
                        >
                            Learnova
                        </span>
                    </RouterLink>

                    <!-- Desktop Navigation -->
                    <nav class="hidden lg:flex lg:items-center lg:gap-8">
                        <template v-for="item in mainNavigation" :key="item.label">
                            <div v-if="item.children" class="relative group">
                                <button
                                    @click="toggleDropdown(item.label)"
                                    :class="[
                                        'relative flex items-center gap-1 text-sm font-medium transition-colors duration-300',
    isScrolled
                                            ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                                            : 'text-white/90 hover:text-white',
                                    ]"
                                >
                                    {{ item.label }}
                                    <svg
                                        class="h-4 w-4 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeDropdown === item.label }"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <!-- Animated Underline -->
                                    <span
                                        :class="[
                                            'absolute bottom-[-8px] left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 transition-all duration-300 group-hover:w-full',
                                        ]"
                                    ></span>
                                </button>
                                <!-- Enhanced Dropdown with Fade and Slide -->
                                <Transition
                                    enter-active-class="transition ease-out duration-300 transform"
                                    enter-from-class="opacity-0 -translate-y-2 scale-95"
                                    enter-to-class="opacity-100 translate-y-0 scale-100"
                                    leave-active-class="transition ease-in duration-200 transform"
                                    leave-from-class="opacity-100 translate-y-0 scale-100"
                                    leave-to-class="opacity-0 -translate-y-2 scale-95"
                                >
                                    <div
                                        v-if="activeDropdown === item.label"
        class="absolute left-0 mt-4 w-56 origin-top rounded-xl bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg py-2 shadow-2xl shadow-neutral-900/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 border border-neutral-200/50 dark:border-neutral-700/50"
                                    >
                                        <RouterLink
                                            v-for="child in item.children"
                                            :key="child.label"
                                            :to="child.href"
class="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:translate-x-1"
                                            @click="activeDropdown = null"
                                        >
                                            {{ child.label }}
                                        </RouterLink>
                                    </div>
                                </Transition>
                            </div>
                            <RouterLink
                                v-else
                                :to="item.href"
:class="[
                                    'relative text-sm font-medium transition-colors duration-300 group',
                                    isScrolled
                                        ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                                        : 'text-white/90 hover:text-white',
                                ]"
                            >
                                {{ item.label }}
                                <!-- Animated Underline on Hover -->
                                <span
                                    :class="[
                                        'absolute bottom-[-8px] left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 transition-all duration-300 group-hover:w-full',
                                    ]"
                                ></span>
                            </RouterLink>
                        </template>
                    </nav>

                    <!-- Desktop CTA -->
                    <div class="hidden lg:flex lg:items-center lg:gap-4">
<!-- Dark Mode Toggle -->
                        <button
                            @click="toggleDarkMode"
                            :class="[
                                'relative p-2.5 rounded-full transition-all duration-300 hover:scale-110',
                                isDark
                                    ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                                    : isScrolled
                                        ? 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                                        : 'bg-white/10 text-white hover:bg-white/20',
                            ]"
                            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
                        >
                            <!-- Sun Icon (shown in Dark Mode - click to switch to Light) -->
                            <svg
                                v-if="isDark"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                                />
                            </svg>
                            <!-- Moon Icon (shown in Light Mode - click to switch to Dark) -->
                            <svg
                                v-else
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>

<RouterLink
                            to="/volunteer"
                            :class="[
                                'relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg',
                                isScrolled
                                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-primary-600/30'
                                    : 'bg-white dark:bg-primary-600 text-primary-600 dark:text-white hover:bg-white/90 dark:hover:bg-primary-700 shadow-lg shadow-white/20 dark:shadow-primary-600/30',
                            ]"
                        >
                            Get Involved
                        </RouterLink>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="toggleMobileMenu"
                        class="relative lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
:class="[isScrolled ? 'text-neutral-900 dark:text-white' : 'text-white']"
                    >
                        <svg
                            v-if="!isMobileMenuOpen"
                            class="h-6 w-6 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            v-else
                            class="h-6 w-6 transition-transform duration-300 rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu with Backdrop Blur and Slide-in Animation -->
        <Transition
            enter-active-class="transition-all ease-out duration-400"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all ease-in duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isMobileMenuOpen"
                @click="closeMobileMenu"
                class="fixed inset-0 z-40 bg-neutral-900/60 backdrop-blur-md lg:hidden"
            >
                <!-- Mobile Menu Panel with Slide Animation -->
                <Transition
                    enter-active-class="transition-all ease-out duration-400"
                    enter-from-class="translate-x-full"
                    enter-to-class="translate-x-0"
                    leave-active-class="transition-all ease-in duration-300"
                    leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full"
                >
                    <div
                        v-if="isMobileMenuOpen"
                        @click.stop
class="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl"
                    >
                        <!-- Mobile Menu Header -->
<div class="flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-700/50 px-6 py-4">
                            <span class="text-lg font-bold text-neutral-900 dark:text-white">Menu</span>
                            <button
                                @click="closeMobileMenu"
class="rounded-lg p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!-- Mobile Navigation -->
                        <nav class="flex flex-col overflow-y-auto p-6" style="max-height: calc(100vh - 140px)">
                            <template v-for="item in mainNavigation" :key="item.label">
                                <div v-if="item.children" class="mb-2">
                                    <button
                                        @click="toggleDropdown(item.label)"
class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-neutral-900 dark:text-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                                    >
                                        {{ item.label }}
                                        <svg
                                            class="h-5 w-5 transition-transform duration-300"
                                            :class="{ 'rotate-180': activeDropdown === item.label }"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <Transition
                                        enter-active-class="transition-all ease-out duration-300"
                                        enter-from-class="opacity-0 -translate-y-2 max-h-0"
                                        enter-to-class="opacity-100 translate-y-0 max-h-96"
                                        leave-active-class="transition-all ease-in duration-200"
                                        leave-from-class="opacity-100 translate-y-0 max-h-96"
                                        leave-to-class="opacity-0 -translate-y-2 max-h-0"
                                    >
                                        <div
                                            v-if="activeDropdown === item.label"
                                            class="ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-gradient-to-b from-primary-500 to-purple-500 pl-4"
                                        >
                                            <RouterLink
                                                v-for="child in item.children"
                                                :key="child.label"
                                                :to="child.href"
class="rounded-lg px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:translate-x-1"
                                                @click="closeMobileMenu"
                                            >
                                                {{ child.label }}
                                            </RouterLink>
                                        </div>
                                    </Transition>
                                </div>
                                <RouterLink
                                    v-else
                                    :to="item.href"
class="mb-2 rounded-lg px-4 py-3 text-base font-medium text-neutral-900 dark:text-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                                    @click="closeMobileMenu"
                                >
                                    {{ item.label }}
                                </RouterLink>
                            </template>

<!-- Dark Mode Toggle (Mobile) -->
                            <button
                                @click="toggleDarkMode"
                                :class="[
                                    'mt-4 flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200',
                                    isDark
                                        ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                                        : 'text-neutral-900 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50',
                                ]"
                            >
                                <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
                                <div :class="[
                                    'flex h-8 w-8 items-center justify-center rounded-full',
                                    isDark ? 'bg-amber-500/20' : 'bg-primary-100',
                                ]">
                                    <!-- Sun Icon -->
                                    <svg
                                        v-if="isDark"
                                        class="h-5 w-5 text-amber-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                                        />
                                    </svg>
                                    <!-- Moon Icon -->
                                    <svg
                                        v-else
                                        class="h-5 w-5 text-primary-600"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </button>

                            <RouterLink
                                to="/volunteer"
                                class="mt-6 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-center text-base font-medium text-white shadow-lg shadow-primary-600/30 hover:from-primary-700 hover:to-primary-800 hover:shadow-primary-600/40 transition-all duration-300 hover:scale-105"
                                @click="closeMobileMenu"
                            >
                                Get Involved
                            </RouterLink>
                        </nav>
                    </div>
                </Transition>
            </div>
        </Transition>
    </header>
</template>
