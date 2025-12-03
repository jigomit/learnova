export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    image: string
    imageAlt: string
    author: {
        name: string
        avatar: string
        role: string
    }
    category: string
    tags: string[]
    publishedAt: string
    readTime: string
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'importance-of-early-childhood-education',
        title: 'The Importance of Early Childhood Education in Underprivileged Communities',
        excerpt: 'Early childhood education lays the foundation for lifelong learning. Discover how investing in young minds can transform entire communities.',
        content: `
            <p>Early childhood education is one of the most powerful investments we can make in our society. Research consistently shows that children who receive quality education in their formative years are more likely to succeed academically, socially, and economically throughout their lives.</p>

            <h2>Why Early Education Matters</h2>
            <p>The first five years of a child's life are critical for brain development. During this period, neural connections are formed at an unprecedented rate, laying the groundwork for all future learning. Children in underprivileged communities often miss out on these crucial developmental opportunities due to lack of access to quality education.</p>

            <h2>Breaking the Cycle of Poverty</h2>
            <p>Education is the most effective tool for breaking the cycle of poverty. When children from disadvantaged backgrounds receive early education, they are more likely to:</p>
            <ul>
                <li>Stay in school longer and achieve higher grades</li>
                <li>Develop better social and emotional skills</li>
                <li>Find stable employment as adults</li>
                <li>Contribute positively to their communities</li>
            </ul>

            <h2>Our Approach</h2>
            <p>At Learnova, we believe every child deserves access to quality early education regardless of their economic background. Our free schooling program focuses on providing comprehensive early childhood education that includes:</p>
            <ul>
                <li>Age-appropriate curriculum designed by education experts</li>
                <li>Trained and caring teachers</li>
                <li>Nutritious meals to support healthy development</li>
                <li>Safe and stimulating learning environments</li>
            </ul>

            <h2>The Impact We've Seen</h2>
            <p>Over the past five years, we've witnessed remarkable transformations in the communities we serve. Children who started in our early education program are now excelling in primary school, with 94% of them performing at or above grade level.</p>

            <p>Parents have reported significant changes in their children's confidence, curiosity, and social skills. Many of these children are now becoming role models in their families, inspiring younger siblings and even parents to pursue education.</p>

            <h2>How You Can Help</h2>
            <p>Supporting early childhood education doesn't require grand gestures. Here are some ways you can make a difference:</p>
            <ul>
                <li>Volunteer your time as a teacher or mentor</li>
                <li>Donate educational materials or supplies</li>
                <li>Spread awareness about the importance of early education</li>
                <li>Support policies that fund education in underprivileged areas</li>
            </ul>

            <p>Together, we can ensure that every child has the opportunity to reach their full potential, regardless of where they were born or the circumstances of their family.</p>
        `,
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800',
        imageAlt: 'Children learning in classroom',
        author: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
            role: 'Education Director',
        },
        category: 'Education',
        tags: ['Early Education', 'Child Development', 'Community Impact'],
        publishedAt: '2024-11-15',
        readTime: '5 min read',
    },
    {
        id: '2',
        slug: 'digital-learning-bridging-the-gap',
        title: 'Digital Learning: Bridging the Educational Gap in Remote Areas',
        excerpt: 'Technology is revolutionizing how we deliver education to children in remote and underserved areas. Learn about our e-learning initiatives.',
        content: `
            <p>In today's digital age, technology has the power to democratize education like never before. For children in remote areas who lack access to traditional schools, e-learning platforms offer a lifeline to quality education.</p>

            <h2>The Digital Divide</h2>
            <p>While urban children have access to multiple educational resources, children in rural and remote areas often struggle with basic educational needs. The digital divide has historically widened this gap, but innovative approaches are now helping bridge it.</p>

            <h2>Our E-Learning Platform</h2>
            <p>Our e-learning platform was designed with accessibility at its core. Key features include:</p>
            <ul>
                <li>Offline-capable content for areas with limited internet</li>
                <li>Mobile-friendly design for learning on any device</li>
                <li>Multi-language support to reach diverse communities</li>
                <li>Interactive lessons that engage visual and auditory learners</li>
            </ul>

            <h2>Success Stories</h2>
            <p>We've seen incredible results from our digital learning initiatives. Students in remote villages who previously had no access to quality education are now learning mathematics, science, and languages through our platform.</p>

            <h2>The Road Ahead</h2>
            <p>Technology alone isn't the answer—it's a tool that must be combined with human support, community engagement, and sustainable infrastructure. We continue to work on expanding our reach while improving the quality of our digital content.</p>
        `,
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
        imageAlt: 'Student using tablet for learning',
        author: {
            name: 'Michael Chen',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
            role: 'Technology Lead',
        },
        category: 'Technology',
        tags: ['E-Learning', 'Digital Education', 'Remote Learning'],
        publishedAt: '2024-11-10',
        readTime: '4 min read',
    },
    {
        id: '3',
        slug: 'volunteer-teachers-making-difference',
        title: 'How Volunteer Teachers Are Making a Difference One Classroom at a Time',
        excerpt: 'Meet the dedicated volunteers who give their time and expertise to educate underprivileged children around the world.',
        content: `
            <p>Behind every successful educational initiative are passionate individuals who dedicate their time and skills to making a difference. Our volunteer teachers are the heart of our mission.</p>

            <h2>The Power of Volunteering</h2>
            <p>Volunteer teachers bring more than just knowledge—they bring hope, inspiration, and a connection to the wider world. Many of our students have never interacted with professionals from different fields, and our volunteers open their eyes to endless possibilities.</p>

            <h2>Meet Our Volunteers</h2>
            <p>Our volunteer network includes retired teachers, working professionals, college students, and experts from various fields. Each brings unique perspectives and skills to our classrooms.</p>

            <h2>Training and Support</h2>
            <p>We provide comprehensive training to all our volunteers, ensuring they have the tools and knowledge to be effective educators. This includes:</p>
            <ul>
                <li>Cultural sensitivity training</li>
                <li>Teaching methodology workshops</li>
                <li>Ongoing mentorship and support</li>
                <li>Access to educational resources and materials</li>
            </ul>

            <h2>Join Our Mission</h2>
            <p>Whether you can spare a few hours a week or commit to a longer engagement, your contribution can change lives. Visit our volunteer page to learn more about how you can get involved.</p>
        `,
        image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800',
        imageAlt: 'Volunteer teacher with students',
        author: {
            name: 'Emily Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
            role: 'Volunteer Coordinator',
        },
        category: 'Community',
        tags: ['Volunteering', 'Teachers', 'Community Service'],
        publishedAt: '2024-11-05',
        readTime: '4 min read',
    },
    {
        id: '4',
        slug: 'scholarship-success-stories',
        title: 'From Dreams to Reality: Scholarship Success Stories',
        excerpt: 'Read inspiring stories of students whose lives were transformed through our scholarship program.',
        content: `
            <p>Every year, our scholarship program helps hundreds of talented students pursue higher education they could never afford on their own. These are their stories.</p>

            <h2>Maria's Journey</h2>
            <p>Maria grew up in a small village where no one in her family had ever attended university. Today, she's studying medicine at one of the country's top universities, thanks to our scholarship program. "This scholarship didn't just change my life—it changed my entire family's future," she says.</p>

            <h2>David's Transformation</h2>
            <p>David was working at a local shop to support his family when he learned about our scholarship program. Now he's pursuing a degree in computer science and has already completed two internships at tech companies. He dreams of starting his own company one day to create jobs in his community.</p>

            <h2>The Ripple Effect</h2>
            <p>What makes our scholarship program unique is its focus on giving back. All our scholars commit to mentoring younger students and contributing to their communities. This creates a ripple effect of positive change that extends far beyond the individual scholarship recipient.</p>

            <h2>How Scholarships Work</h2>
            <p>Our scholarships cover:</p>
            <ul>
                <li>Full or partial tuition fees</li>
                <li>Living expenses and accommodation</li>
                <li>Books and learning materials</li>
                <li>Mentorship and career guidance</li>
            </ul>

            <p>If you know a deserving student or want to support our scholarship fund, please get in touch with us.</p>
        `,
        image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800',
        imageAlt: 'Graduate celebrating',
        author: {
            name: 'James Wilson',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
            role: 'Scholarship Program Manager',
        },
        category: 'Success Stories',
        tags: ['Scholarships', 'Higher Education', 'Success Stories'],
        publishedAt: '2024-10-28',
        readTime: '5 min read',
    },
    {
        id: '5',
        slug: 'building-schools-rural-communities',
        title: 'Building Schools in Rural Communities: Challenges and Triumphs',
        excerpt: 'The journey of establishing educational infrastructure in remote areas is filled with obstacles, but the rewards are immeasurable.',
        content: `
            <p>Building a school in a rural community is about more than just construction—it's about building hope, opportunity, and a brighter future for generations to come.</p>

            <h2>The Challenges We Face</h2>
            <p>Establishing schools in remote areas comes with unique challenges:</p>
            <ul>
                <li>Limited access to construction materials</li>
                <li>Lack of basic infrastructure like electricity and water</li>
                <li>Difficulty in recruiting and retaining qualified teachers</li>
                <li>Community skepticism about formal education</li>
            </ul>

            <h2>Our Approach</h2>
            <p>We've learned that successful school-building requires deep community engagement. We work closely with local leaders, parents, and community members to ensure our schools meet their specific needs and gain their support.</p>

            <h2>Recent Projects</h2>
            <p>Last year, we completed construction of three new schools in remote villages, providing education access to over 500 children who previously had to walk hours to reach the nearest school—or simply went without education.</p>

            <h2>Sustainable Solutions</h2>
            <p>Our schools are designed with sustainability in mind, using local materials and incorporating solar power where grid electricity isn't available. We also train community members to maintain the facilities, ensuring long-term sustainability.</p>
        `,
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800',
        imageAlt: 'New school building in rural area',
        author: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
            role: 'Education Director',
        },
        category: 'Infrastructure',
        tags: ['School Construction', 'Rural Education', 'Community Development'],
        publishedAt: '2024-10-20',
        readTime: '6 min read',
    },
    {
        id: '6',
        slug: 'importance-nutrition-education',
        title: 'The Connection Between Nutrition and Educational Success',
        excerpt: 'A hungry child cannot learn effectively. Discover how our meal programs support educational outcomes.',
        content: `
            <p>Research consistently shows that nutrition plays a crucial role in cognitive development and academic performance. For children from underprivileged backgrounds, a nutritious meal might be the difference between success and struggle in the classroom.</p>

            <h2>The Science Behind It</h2>
            <p>Proper nutrition supports brain development, improves concentration, and enhances memory. Children who come to school hungry often struggle to focus, participate, and retain information.</p>

            <h2>Our Meal Program</h2>
            <p>At all our schools, we provide nutritious daily meals to every student. Our program includes:</p>
            <ul>
                <li>Balanced breakfasts to start the day right</li>
                <li>Nutritious lunches with locally-sourced ingredients</li>
                <li>Healthy snacks for afternoon energy</li>
                <li>Clean drinking water throughout the day</li>
            </ul>

            <h2>The Impact</h2>
            <p>Since implementing our meal program, we've seen significant improvements in attendance, test scores, and overall student engagement. Parents report that their children are more eager to attend school, knowing they'll receive a good meal.</p>

            <h2>Supporting Our Program</h2>
            <p>Our meal program relies on generous donations and local partnerships. If you'd like to support this initiative, consider sponsoring meals for students in need.</p>
        `,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
        imageAlt: 'Children enjoying school meal',
        author: {
            name: 'Dr. Amanda Foster',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
            role: 'Health & Nutrition Advisor',
        },
        category: 'Health',
        tags: ['Nutrition', 'School Meals', 'Child Health'],
        publishedAt: '2024-10-15',
        readTime: '4 min read',
    },
]

export const getBlogPost = (slug: string): BlogPost | undefined => {
    return blogPosts.find((post) => post.slug === slug)
}

export const getRecentPosts = (count: number = 3): BlogPost[] => {
    return blogPosts.slice(0, count)
}

export const getRelatedPosts = (currentSlug: string, count: number = 3): BlogPost[] => {
    const currentPost = getBlogPost(currentSlug)
    if (!currentPost) return blogPosts.slice(0, count)

    return blogPosts
        .filter((post) => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, count)
}

export const categories = [...new Set(blogPosts.map((post) => post.category))]
