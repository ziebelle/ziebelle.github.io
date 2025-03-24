'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);
    const isVideo = project.image.endsWith('.mp4');
    const isGif = project.image.endsWith('.gif');

    return (
        <div className="bg-white dark:bg-dark rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-52 bg-gray-200 dark:bg-gray-700 p-2">
                {isVideo ? (
                    <video
                        className="w-full h-full object-contain rounded-md"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={project.image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain rounded-md"
                        onError={() => setImageError(true)}
                        unoptimized={isGif}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <p className="text-gray-500 dark:text-gray-400 text-center">{project.title}</p>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                        >
                            {link.title}
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 