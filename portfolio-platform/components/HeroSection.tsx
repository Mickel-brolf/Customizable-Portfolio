import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
                    Showcase your work <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        like a pro
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
                    Create a stunning portfolio in minutes. Custom domains, beautiful templates, and powerful analytics to help you grow.
                </p>
                <div className="mt-10 flex gap-4 justify-center">
                    <Link href="/register" className="px-8 py-3 rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
                        Start Free Trial
                    </Link>
                    <Link href="#demo" className="px-8 py-3 rounded-full text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 md:text-lg md:px-10 transition-colors">
                        View Demo
                    </Link>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>
        </div>
    );
}
