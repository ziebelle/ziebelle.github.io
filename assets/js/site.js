const projects = [
    {
        id: 1,
        title: "Statistical inference for the stochastic wave equation based on discrete observations",
        description: "Research paper on parameter estimation for the stochastic wave equation based on discrete observations.",
        image: "/images/fejer_kernels.png",
        tags: ["Research", "SPDEs", "Parameter Estimation", "Fejér Kernels", "Discrete Observations"],
        links: [{ title: "ArXiv", url: "https://arxiv.org/abs/2602.04708" }],
        featured: true,
    },
    {
        id: 2,
        title: "Parameter estimation in hyperbolic linear SPDEs",
        description: "Research paper on parameter estimation methods for hyperbolic linear SPDEs using multiple measurements.",
        image: "/images/plate_equation.png",
        tags: ["Research", "SPDEs", "Parameter Estimation", "Hyperbolic Equations", "M, N-Functions"],
        links: [
            { title: "ArXiv", url: "https://arxiv.org/abs/2407.13461" },
            { title: "Published Version", url: "https://www.sciencedirect.com/science/article/pii/S0304414925002121" },
        ],
        featured: true,
    },
    {
        id: 3,
        title: "Non-parametric estimation for the stochastic wave equation",
        description: "Academic research on non-parametric estimation techniques applied to stochastic wave equations.",
        image: "/images/RiemannLebesgue.mp4",
        tags: ["Research", "Stochastic Wave Equation", "Non-parametric Estimation", "Equipartition of Energy", "Riemann-Lebesgue operators"],
        links: [
            { title: "ArXiv", url: "https://arxiv.org/abs/2404.18823" },
            { title: "Published Version", url: "https://projecteuclid.org/journals/electronic-journal-of-statistics/volume-20/issue-1/Non-parametric-estimation-for-the-stochastic-wave-equation/10.1214/26-EJS2491.full" },
        ],
        featured: true,
    },
    {
        id: 4,
        title: "EarlyStopping Python Library",
        description: "A Python library providing tools for early stopping techniques in machine learning and optimization algorithms.",
        image: "/images/tree_heatmaps.gif",
        tags: ["Python", "Machine Learning", "Open Source", "Library", "Early Stopping"],
        links: [
            { title: "GitHub", url: "https://github.com/ESFIEP/EarlyStopping" },
            { title: "Documentation", url: "https://earlystop.github.io/EarlyStopping/" },
            { title: "ArXiv", url: "https://arxiv.org/abs/2503.16753" },
        ],
        featured: true,
    },
    {
        id: 5,
        title: "SPDE-Gallery",
        description: "A collection of visualizations and simulations for Stochastic Partial Differential Equations.",
        image: "/images/gallery_1.png",
        tags: ["SPDEs", "Visualization", "Educational", "Mathematics"],
        links: [
            { title: "View Poster 1", url: "https://www.mathematik.hu-berlin.de/de/forschung/forschungsgebiete/stochastik/stoch-employees/mreiss/publications/spdegallery1.pdf" },
            { title: "View Poster 2", url: "https://www.mathematik.hu-berlin.de/de/forschung/forschungsgebiete/stochastik/stoch-employees/mreiss/publications/spdegallery2.pdf" },
            { title: "View Gallery", url: "https://ziebelle.github.io/SPDE-Gallery/" },
        ],
        featured: true,
    },
    {
        id: 6,
        title: "Espanso LaTeX Snippets",
        description: "A collection of LaTeX snippets for the Espanso text expander, enhancing LaTeX writing productivity.",
        image: "/images/espanso_snippets.png",
        tags: ["LaTeX", "Espanso", "Productivity", "Tool"],
        links: [{ title: "View Project", url: "https://github.com/ziebelle/EspansoMathSnippets" }],
    },
    {
        id: 7,
        title: "GenHack2: Sea Surface Temperature Modeling",
        description: "Generative modeling of sea surface temperature using normalizing flows.",
        image: "/images/marginals.png",
        tags: ["Machine Learning", "Normalizing Flows", "Climate Science", "Generative Models"],
        links: [{ title: "Read Article", url: "https://medium.com/@starokon/generative-modelling-of-sea-surface-temperature-with-normalizing-flows-cdafa3d90b56" }],
    },
];

const featuredProjectsElement = document.getElementById("featuredProjects");
const allProjectsElement = document.getElementById("allProjects");
const tagFiltersElement = document.getElementById("tagFilters");
const themeToggle = document.getElementById("themeToggle");

const normalizeAssetPath = (path) => (path.startsWith("/") ? path.slice(1) : path);
const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) => a.localeCompare(b));

let activeTag = "All";

function createMediaElement(project) {
    const wrapper = document.createElement("div");
    wrapper.className = "project-media";

    if (project.featured) {
        const badge = document.createElement("span");
        badge.className = "featured-badge";
        badge.textContent = "Featured";
        wrapper.appendChild(badge);
    }

    const src = normalizeAssetPath(project.image);

    if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute("aria-label", `Preview for ${project.title}`);

        const source = document.createElement("source");
        source.src = src;
        source.type = "video/mp4";
        video.appendChild(source);

        wrapper.appendChild(video);
        return wrapper;
    }

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Preview image for ${project.title}`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
        wrapper.innerHTML = "";
        if (project.featured) {
            const badge = document.createElement("span");
            badge.className = "featured-badge";
            badge.textContent = "Featured";
            wrapper.appendChild(badge);
        }
        const fallback = document.createElement("div");
        fallback.className = "media-fallback";
        fallback.textContent = project.title;
        wrapper.appendChild(fallback);
    });

    wrapper.appendChild(img);
    return wrapper;
}

function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const media = createMediaElement(project);
    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";
    project.tags.forEach((tagText) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tagText;
        tagRow.appendChild(tag);
    });

    const linkRow = document.createElement("div");
    linkRow.className = "link-row";
    project.links.forEach((linkData) => {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = linkData.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = `${linkData.title} →`;
        linkRow.appendChild(link);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tagRow);
    content.appendChild(linkRow);

    card.appendChild(media);
    card.appendChild(content);

    return card;
}

function renderProjects() {
    const featured = projects.filter((project) => project.featured);
    const filtered = activeTag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(activeTag));

    featuredProjectsElement.replaceChildren(...featured.map(createProjectCard));

    if (filtered.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent = "No projects match this filter yet.";
        allProjectsElement.replaceChildren(emptyState);
    } else {
        allProjectsElement.replaceChildren(...filtered.map(createProjectCard));
    }
}

function renderFilters() {
    const filters = ["All", ...uniqueTags];
    const buttons = filters.map((tag) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "filter-button";
        button.textContent = tag;
        if (tag === activeTag) button.classList.add("is-active");
        button.addEventListener("click", () => {
            activeTag = tag;
            renderFilters();
            renderProjects();
        });
        return button;
    });

    tagFiltersElement.replaceChildren(...buttons);
}

function applyStoredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
        document.body.dataset.theme = stored;
    }
    updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
    const isDark = document.body.dataset.theme === "dark";
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeButtonLabel();
});

applyStoredTheme();
renderFilters();
renderProjects();