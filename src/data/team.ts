export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    avatar?: string
    social?: {
        linkedin?: string
        twitter?: string
    }
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Dr. Sarah Johnson',
        role: 'Founder & Executive Director',
        bio: 'With over 20 years in education policy, Dr. Johnson founded this organization to ensure every child has access to quality education.',
        avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200',
    },
    {
        id: '2',
        name: 'Rajesh Gupta',
        role: 'Director of Programs',
        bio: 'Rajesh brings 15 years of experience in educational program development and community engagement.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    },
    {
        id: '3',
        name: 'Maria Santos',
        role: 'Head of E-Learning',
        bio: 'A technology enthusiast, Maria leads our digital education initiatives and platform development.',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    },
    {
        id: '4',
        name: 'James Okonkwo',
        role: 'Volunteer Coordinator',
        bio: 'James manages our global network of volunteer teachers and ensures meaningful volunteer experiences.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    {
        id: '5',
        name: 'Aisha Khan',
        role: 'Scholarship Program Manager',
        bio: 'Aisha oversees scholarship applications and works closely with partner universities worldwide.',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200',
    },
    {
        id: '6',
        name: 'Thomas Lee',
        role: 'Community Outreach',
        bio: 'Thomas builds relationships with communities and ensures our programs meet local needs.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
]

export const milestones = [
    {
        year: '2010',
        title: 'Foundation',
        description: 'Started with a single classroom serving 30 students in a rural community.',
    },
    {
        year: '2013',
        title: 'First Expansion',
        description: 'Opened 5 new schools and launched our volunteer teacher program.',
    },
    {
        year: '2016',
        title: 'E-Learning Launch',
        description: 'Introduced our digital learning platform, reaching students in remote areas.',
    },
    {
        year: '2018',
        title: 'Scholarship Program',
        description: 'Awarded first scholarships, helping students pursue higher education.',
    },
    {
        year: '2020',
        title: 'Global Reach',
        description: 'Expanded to 10 countries, serving over 10,000 students worldwide.',
    },
    {
        year: '2024',
        title: 'Continuing Growth',
        description: 'Now present in 12 countries with 50+ schools and 500+ volunteers.',
    },
]
