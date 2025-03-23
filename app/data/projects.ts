// Project type definition
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured?: boolean; // Whether this project should be featured on the homepage
}

// All projects data
export const allProjects: Project[] = [
    {
        id: 1,
        title: 'Parameter estimation in hyperbolic linear SPDEs',
        description: 'Research paper on parameter estimation methods for hyperbolic linear SPDEs using multiple measurements.',
        image: '/images/plate_equation.png',
        tags: ['Research', 'SPDEs', 'Parameter Estimation', 'Hyperbolic Equations'],
        link: 'https://arxiv.org/abs/2407.13461',
        featured: true,
    },
    {
        id: 2,
        title: 'Non-parametric estimation for the stochastic wave equation',
        description: 'Academic research on non-parametric estimation techniques applied to stochastic wave equations.',
        image: '/images/seperated_halfspaces_cut.png',
        tags: ['Research', 'Stochastic Wave Equation', 'Non-parametric Estimation'],
        link: 'https://arxiv.org/abs/2404.18823',
        featured: true,
    },
    {
        id: 3,
        title: 'EarlyStopping Python Library',
        description: 'A Python library providing tools for early stopping techniques in machine learning and optimization algorithms.',
        image: '/images/tree_heatmaps.gif',
        tags: ['Python', 'Machine Learning', 'Open Source', 'Library'],
        link: 'https://github.com/ESFIEP/EarlyStopping',
        featured: true,
    },
    {
        id: 4,
        title: 'SPDE-Gallery',
        description: 'A collection of visualizations and simulations for Stochastic Partial Differential Equations.',
        image: '/images/project4.jpg',
        tags: ['SPDEs', 'Visualization', 'Educational', 'Mathematics'],
        link: 'https://hu.berlin/SPDE-Gallery',
    },
    {
        id: 5,
        title: 'Espanso LaTeX Snippets',
        description: 'A collection of LaTeX snippets for the Espanso text expander, enhancing LaTeX writing productivity.',
        image: '/images/project5.jpg',
        tags: ['LaTeX', 'Espanso', 'Productivity', 'Tool'],
        link: 'https://github.com/ziebelle/EspansoMathSnippets',
    },
    {
        id: 6,
        title: 'GenHack2: Sea Surface Temperature Modeling',
        description: 'Generative modeling of sea surface temperature using normalizing flows.',
        image: '/images/project6.jpg',
        tags: ['Machine Learning', 'Normalizing Flows', 'Climate Science', 'Generative Models'],
        link: 'https://medium.com/@starokon/generative-modelling-of-sea-surface-temperature-with-normalizing-flows-cdafa3d90b56',
    },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
    return allProjects.filter(project => project.featured);
}; 