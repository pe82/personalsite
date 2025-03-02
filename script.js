// Theme toggling
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDarkScheme.matches);
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
});

// Contact section highlighting
function highlightContactSection() {
    const contactSection = document.querySelector('.contact');
    contactSection.classList.add('highlight');
    
    // Remove the highlight class after animation completes
    setTimeout(() => {
        contactSection.classList.remove('highlight');
    }, 5000);

    // Ensure smooth scroll to contact section
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click handlers to all CTA buttons that link to contact section
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('a[href="#contact"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            highlightContactSection();
        });
    });
});

// Sample projects data
const projects = [
    {
        title: 'Data Pipeline Framework',
        description: 'Engineered a robust data processing pipeline handling millions of records daily. Built with scalability and fault tolerance in mind, featuring automated error recovery and monitoring.',
        tags: ['Python', 'SQL', 'AWS', 'Data Engineering'],
        link: '#'
    },
    {
        title: 'System Architecture Optimization',
        description: 'Led the redesign of a critical backend system, improving performance by 60% and reducing operational costs. Implemented caching strategies and optimized database queries.',
        tags: ['System Design', 'Backend', 'Performance', 'Optimization'],
        link: '#'
    },
    {
        title: 'API Gateway Service',
        description: 'Developed a centralized API gateway service managing authentication, rate limiting, and request routing for microservices architecture.',
        tags: ['Microservices', 'API Design', 'Security', 'Cloud'],
        link: '#'
    }
];

// Populate projects
const projectsGrid = document.querySelector('.projects-grid');

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" class="project-link">View Project</a>
    `;
    return card;
}

projects.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
});

// Add project card styles
const style = document.createElement('style');
style.textContent = `
    .project-card {
        background-color: var(--bg-color);
        border: 2px solid var(--accent-color);
        border-radius: 1rem;
        padding: 1.5rem;
        transition: var(--transition);
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .project-card h3 {
        margin-bottom: 1rem;
        color: var(--primary-color);
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .project-tags span {
        background-color: var(--accent-color);
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        font-size: 0.8rem;
    }

    .project-link {
        display: inline-block;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        margin-top: 1rem;
    }

    .project-link:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style); 