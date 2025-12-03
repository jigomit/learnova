export interface Testimonial {
    id: string
    quote: string
    author: string
    role: string
    program: string
    image: string
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'This program changed my life. I never thought I would be able to go to school, but now I dream of becoming a doctor. Thank you for believing in me.',
        author: 'Priya Sharma',
        role: 'Student, Age 14',
        program: 'Free Schooling Program',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150',
    },
    {
        id: '2',
        quote: 'The e-learning platform helped me continue my education during difficult times. I can study anytime, anywhere, and the interactive lessons make learning fun.',
        author: 'Rahul Kumar',
        role: 'Student, Age 16',
        program: 'E-Learning Resources',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    },
    {
        id: '3',
        quote: 'Receiving the scholarship was a turning point in my life. I am now pursuing engineering at a top university, something my family never imagined possible.',
        author: 'Anjali Patel',
        role: 'Scholarship Recipient',
        program: 'Scholarship Program',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
    {
        id: '4',
        quote: 'Volunteering as a teacher has been the most rewarding experience. Seeing the spark in children\'s eyes when they understand something new is priceless.',
        author: 'Michael Chen',
        role: 'Volunteer Teacher',
        program: 'Volunteer Teachers Program',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
    },
    {
        id: '5',
        quote: 'My daughter\'s confidence has grown tremendously since joining the program. She loves going to school and is always excited to share what she learned.',
        author: 'Sunita Devi',
        role: 'Parent',
        program: 'Free Schooling Program',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    },
    {
        id: '6',
        quote: 'The mentorship I received through the scholarship program helped me navigate university life and secure a great job. I am forever grateful.',
        author: 'David Okonkwo',
        role: 'Scholarship Alumni',
        program: 'Scholarship Program',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150',
    },
]
