# Learnova

A modern web application dedicated to providing free education for underprivileged children worldwide. Built with Vue 3, TypeScript, and Tailwind CSS.

## About

Learnova provides free education, e-learning resources, scholarships, and volunteer teacher programs to underprivileged children, helping them unlock their full potential.

### Key Features

- **Free Schooling Programs** - Access to quality education at no cost
- **E-Learning Platform** - Online learning resources and courses
- **Scholarships** - Financial aid for low-income students
- **Volunteer Opportunities** - Join as a volunteer teacher

## Tech Stack

- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: Vue Router
- **Build Tool**: Vite
- **SEO**: @unhead/vue

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/learnova.git

# Navigate to project directory
cd learnova

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run lint` | Lint and fix code |

## Project Structure

```
src/
├── components/
│   ├── home/          # Homepage components
│   ├── layout/        # Layout components (Header, Footer)
│   └── shared/        # Reusable components
├── composables/       # Vue composables
├── data/              # Static data files
├── pages/             # Page components
│   ├── Blog/          # Blog pages
│   └── Programs/      # Program pages
├── router/            # Vue Router configuration
├── types/             # TypeScript types
└── lib/               # Utility functions
```

## License

MIT License
