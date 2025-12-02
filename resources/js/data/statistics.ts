export interface Statistic {
    id: string
    value: number
    suffix?: string
    prefix?: string
    label: string
    icon: string
    description?: string
}

export const impactStatistics: Statistic[] = [
    {
        id: 'students',
        value: 10000,
        suffix: '+',
        label: 'Students Helped',
        icon: 'users',
        description: 'Children receiving quality education',
    },
    {
        id: 'schools',
        value: 50,
        suffix: '+',
        label: 'Schools Supported',
        icon: 'building',
        description: 'Learning centers across the region',
    },
    {
        id: 'volunteers',
        value: 500,
        suffix: '+',
        label: 'Volunteer Teachers',
        icon: 'heart',
        description: 'Dedicated educators giving back',
    },
    {
        id: 'countries',
        value: 12,
        label: 'Countries Reached',
        icon: 'globe',
        description: 'Global impact and presence',
    },
]

export const detailedStatistics = {
    education: [
        { label: 'Literacy Rate Improvement', value: '45%' },
        { label: 'Students Graduating', value: '94%' },
        { label: 'Continuing to Higher Education', value: '67%' },
    ],
    community: [
        { label: 'Families Supported', value: '8,000+' },
        { label: 'Community Events', value: '200+' },
        { label: 'Local Partners', value: '150+' },
    ],
}
