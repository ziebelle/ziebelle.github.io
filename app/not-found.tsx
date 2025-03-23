import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="section-container py-16 flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">404 - Page Not Found</h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 text-center">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="btn-primary">
                Return to Home
            </Link>
        </div>
    );
} 