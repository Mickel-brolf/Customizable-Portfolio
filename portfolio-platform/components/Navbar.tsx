import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            PortfolioHub
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Features
                        </Link>
                        <Link href="#showcase" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Showcase
                        </Link>
                        <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/login" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
