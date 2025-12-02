export function useSmoothScroll() {
    const scrollToElement = (selector: string, offset: number = 80) => {
        const element = document.querySelector(selector)
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({
                top,
                behavior: 'smooth',
            })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return { scrollToElement, scrollToTop }
}
