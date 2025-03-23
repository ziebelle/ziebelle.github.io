import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';

export default function ProjectsPage() {
    return (
        <div className="py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Projects</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A collection of my academic research and other projects.
                    </p>
                </div>

                <div className="project-grid">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
} 