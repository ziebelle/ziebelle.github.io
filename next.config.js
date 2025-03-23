/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    // Add basePath if your GitHub Pages site will be served from a subfolder
    // e.g., https://username.github.io/repo-name/
    // basePath: '/ziebelle.github.io',

    // Configure image handling for static export
    images: {
        unoptimized: true,
    },

    // Disable trailing slashes for GitHub Pages
    trailingSlash: false,
};

module.exports = nextConfig; 