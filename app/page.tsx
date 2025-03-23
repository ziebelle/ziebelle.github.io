import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import { getFeaturedProjects } from './data/projects';

export default function Home() {
    // Get featured projects from our data file
    const featuredProjects = getFeaturedProjects();

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-blue-600 text-white">
                <div className="section-container py-12">
                    <div className="grid grid-cols-1 gap-8 items-center">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Eric Ziebell
                            </h1>
                            <p className="text-lg mb-8 max-w-3xl mx-auto">
                                I specialize in stochastic partial differential equations, mathematical modeling, and developing tools for scientific computing.
                            </p>
                            <div className="flex space-x-4 justify-center">
                                <Link href="/projects" className="btn-primary">
                                    View Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-16">
                <div className="section-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Research and Projects</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Recent research papers and open-source contributions in mathematics and scientific computing.
                        </p>
                    </div>

                    <div className="project-grid">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/projects" className="btn-primary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
} 