const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the Next.js application
console.log('\x1b[36m%s\x1b[0m', '🏗️ Building the application...');
execSync('npm run build', { stdio: 'inherit' });

// Ensure out directory has .nojekyll file
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
    console.log('\x1b[36m%s\x1b[0m', '📄 Creating .nojekyll file...');
    fs.writeFileSync(nojekyllPath, '');
}

// Push to GitHub Pages
console.log('\x1b[36m%s\x1b[0m', '🚀 Deploying to GitHub Pages...');

try {
    // Add all files in out directory
    execSync('git add -f out/', { stdio: 'inherit' });

    // Commit changes
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });

    // Push to gh-pages branch
    execSync('git subtree push --prefix out origin gh-pages', { stdio: 'inherit' });

    console.log('\x1b[32m%s\x1b[0m', '✅ Successfully deployed to GitHub Pages!');
} catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Deployment failed:', error.message);
    process.exit(1);
} 