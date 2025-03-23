# Eric Ziebell's Academic Website

A clean, modern academic website built with Next.js and Tailwind CSS to showcase research in stochastic partial differential equations and mathematical modeling.

## Features

- Responsive design that works on all devices
- Dark mode support
- Focus on research and academic projects
- Fast loading and accessibility

## Pages

- **Home**: Introduction and featured research papers/projects
- **Projects**: Complete gallery of academic research and software projects

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Images

Place your project images in the `public/images` directory. The project data in `app/data/projects.ts` references these images.

### Updating Projects

Edit the projects data in `app/data/projects.ts` to add or modify research papers and other projects.

## Deployment to GitHub Pages

This site is configured for deployment to GitHub Pages:

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://ziebelle.github.io/`

Manual deployment can be done with:
```bash
npm run build
npm run deploy
```

## License

This project is open source and available under the MIT License. 