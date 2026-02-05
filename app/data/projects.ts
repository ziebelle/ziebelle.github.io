// Project type definition
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        title: string;
        url: string;
    }[];
    featured?: boolean; // Whether this project should be featured on the homepage
}

// All projects data
export const allProjects: Project[] = [
    {
        id: 1,
        title: 'Statistical inference for the stochastic wave equation based on discrete observations',
        description: 'Research paper on parameter estimation for the stochastic wave equation based on discrete observations.',
        image: '/images/fejer_kernels.png',
        tags: ['Research', 'SPDEs', 'Parameter Estimation', 'Fejér Kernels', 'Discrete Observations'],
        links: [{ title: 'ArXiv', url: 'https://arxiv.org/abs/2602.04708' }],
        featured: true,
    },
    {
        id: 2,
        title: 'Parameter estimation in hyperbolic linear SPDEs',
        description: 'Research paper on parameter estimation methods for hyperbolic linear SPDEs using multiple measurements.',
        image: '/images/plate_equation.png',
        tags: ['Research', 'SPDEs', 'Parameter Estimation', 'Hyperbolic Equations', 'M, N-Functions'],
        links: [
            { title: 'ArXiv', url: 'https://arxiv.org/abs/2407.13461' },
            { title: 'Published Version', url: 'https://www.sciencedirect.com/science/article/pii/S0304414925002121' }
        ],
        featured: true,
    },
    {
        id: 3,
        title: 'Non-parametric estimation for the stochastic wave equation',
        description: 'Academic research on non-parametric estimation techniques applied to stochastic wave equations.',
        image: '/images/RiemannLebesgue.mp4',
        tags: ['Research', 'Stochastic Wave Equation', 'Non-parametric Estimation', 'Equipartition of Energy', 'Riemann-Lebesgue operators'],
        links: [{ title: 'ArXiv', url: 'https://arxiv.org/abs/2404.18823' }],
        featured: true,
    },
    {
        id: 4,
        title: 'EarlyStopping Python Library',
        description: 'A Python library providing tools for early stopping techniques in machine learning and optimization algorithms.',
        image: '/images/tree_heatmaps.gif',
        tags: ['Python', 'Machine Learning', 'Open Source', 'Library', 'Early Stopping'],
        links: [
            { title: 'GitHub', url: 'https://github.com/ESFIEP/EarlyStopping' },
            { title: 'Documentation', url: 'https://earlystop.github.io/EarlyStopping/' },
            { title: 'ArXiv', url: 'https://arxiv.org/abs/2503.16753' }
        ],
        featured: true,
    },
    {
        id: 5,
        title: 'SPDE-Gallery',
        description: 'A collection of visualizations and simulations for Stochastic Partial Differential Equations.',
        image: '/images/gallery_1.png',
        tags: ['SPDEs', 'Visualization', 'Educational', 'Mathematics'],
        links: [
            { title: 'View Poster 1', url: 'https://www.mathematik.hu-berlin.de/de/forschung/forschungsgebiete/stochastik/stoch-employees/mreiss/publications/spdegallery1.pdf' },
            { title: 'View Poster 2', url: 'https://www.mathematik.hu-berlin.de/de/forschung/forschungsgebiete/stochastik/stoch-employees/mreiss/publications/spdegallery2.pdf' },
            { title: 'View Gallery', url: 'https://ziebelle.github.io/SPDE-Gallery/' }
        ],
    },
    {
        id: 6,
        title: 'Espanso LaTeX Snippets',
        description: 'A collection of LaTeX snippets for the Espanso text expander, enhancing LaTeX writing productivity.',
        image: '/images/espanso_snippets.png',
        tags: ['LaTeX', 'Espanso', 'Productivity', 'Tool'],
        links: [{ title: 'View Project', url: 'https://github.com/ziebelle/EspansoMathSnippets' }],
    },
    {
        id: 7,
        title: 'GenHack2: Sea Surface Temperature Modeling',
        description: 'Generative modeling of sea surface temperature using normalizing flows.',
        image: '/images/marginals.png',
        tags: ['Machine Learning', 'Normalizing Flows', 'Climate Science', 'Generative Models'],
        links: [{ title: 'Read Article', url: 'https://medium.com/@starokon/generative-modelling-of-sea-surface-temperature-with-normalizing-flows-cdafa3d90b56' }],
    },
    // {
    //     id: 7,
    //     title: 'Learning web development',
    //     description: 'Learning web developement with React and vue',
    //     image: '/images/nuxt_code.png',
    //     tags: ['React', 'Vue', 'Web Development'],
    //     links: [{ title: 'learning-vue', url: 'https://ziebelle.github.io/learning-vue/' }],
    // }
    // },
    // {
    //     id: 7,
    //     title: 'Math learning projects',
    //     description: 'Obsidian vault',
    //     image: '/images/question.png',
    //     tags: ['Mathematics', 'Research'],
    //     links: [{ title: 'Obsidian Wiki', url: 'https://publish.obsidian.md/ziebelle' }],
    // }
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
    return allProjects.filter(project => project.featured);
}; 