'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    return (
        <div className="py-16">
            <div className="section-container">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>

                    <div className="bg-white dark:bg-dark rounded-lg shadow-md p-8">
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            You can reach me at:
                        </p>

                        <div className="flex flex-col items-center space-y-4">
                            {!isEmailVisible ? (
                                <button
                                    onClick={() => setIsEmailVisible(true)}
                                    className="btn-primary"
                                >
                                    Show Email Address
                                </button>
                            ) : (
                                <p className="text-primary text-lg font-medium select-all">
                                    ziebelle (at) hu-berlin.de
                                </p>
                            )}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold mb-4">Postal address</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Humboldt-Universität zu Berlin<br />
                                Department of Mathematics<br />
                                Unter den Linden 6<br />
                                10099 Berlin, Germany
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 