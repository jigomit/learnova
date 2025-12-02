export interface NavItem {
    label: string
    href: string
    children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Programs',
        href: '/programs',
        children: [
            { label: 'Free Schooling', href: '/programs/free-schooling' },
            { label: 'E-Learning', href: '/programs/e-learning' },
            { label: 'Scholarships', href: '/programs/scholarships' },
        ],
    },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Contact', href: '/contact' },
]

export const footerNavigation = {
    programs: [
        { label: 'Free Schooling', href: '/programs/free-schooling' },
        { label: 'E-Learning', href: '/programs/e-learning' },
        { label: 'Scholarships', href: '/programs/scholarships' },
        { label: 'Volunteer Teachers', href: '/volunteer' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Programs', href: '/programs' },
        { label: 'Contact', href: '/contact' },
    ],
    resources: [
        { label: 'Blog', href: '/blog' },
    ],
    social: [
        { label: 'Facebook', href: '#', icon: 'facebook' },
        { label: 'Twitter', href: '#', icon: 'twitter' },
        { label: 'Instagram', href: '#', icon: 'instagram' },
        { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
}
