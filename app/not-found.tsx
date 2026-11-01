import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 text-center transition-colors duration-300">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-500">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}