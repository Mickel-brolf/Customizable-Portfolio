import connectDB from "@/lib/db";
import Client from "@/models/Client";
import Project from "@/models/Project";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
    params: Promise<{ subdomain: string }>;
}

async function getClientData(subdomain: string) {
    await connectDB();
    const client = await Client.findOne({ subdomain });
    if (!client) return null;

    const projects = await Project.find({ clientId: client._id });
    return { client, projects };
}

export default async function ClientPortfolio({ params }: Props) {
    const { subdomain } = await params;
    const data = await getClientData(subdomain);

    if (!data) {
        notFound();
    }

    const { client, projects } = data;

    return (
        <div style={{ fontFamily: client.theme.font || 'Inter' }}>
            {/* Client Header */}
            <header className="py-6 px-8 border-b" style={{ borderColor: `${client.theme.color}20` }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        {client.logo && (
                            <div className="relative w-12 h-12">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                        )}
                        <h1 className="text-2xl font-bold" style={{ color: client.theme.color }}>
                            {client.name}
                        </h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a></li>
                            <li><a href="#services" className="hover:opacity-70 transition-opacity">Services</a></li>
                            <li><a href="#contact" className="px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90" style={{ backgroundColor: client.theme.color }}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6 text-gray-900">
                        Welcome to <span style={{ color: client.theme.color }}>{client.name}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We create amazing digital experiences. Check out our work below.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section id="projects" className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center">Our Work</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project: any) => (
                            <div key={project._id} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <div className="relative h-64 bg-gray-200">
                                    {project.images && project.images[0] ? (
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        {project.category}
                                    </span>
                                    <h4 className="text-xl font-bold mt-2 mb-2">{project.title}</h4>
                                    <p className="text-gray-600 line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-8 bg-gray-900 text-white text-center">
                <p>&copy; {new Date().getFullYear()} {client.name}. Powered by PortfolioHub.</p>
            </footer>
        </div>
    );
}
