'use client';

import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white shadow-inner dark:bg-dark mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Site Navigation */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Research Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Research Interests</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Mathematical Statistics, Statistics for SPDEs, Early Stopping, Functional Analysis, Minimax Lowerbounds
                        </p>
                        <div className="mt-4 space-x-4">
                            <a href="https://github.com/ziebelle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                                GitHub
                            </a>
                            <a href="https://orcid.org/0009-0002-2065-3028" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                                ORCID
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        © {currentYear} Eric Ziebell. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 