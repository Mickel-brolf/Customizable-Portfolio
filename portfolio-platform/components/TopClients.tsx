'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Client {
    _id: string;
    name: string;
    subdomain: string;
    logo: string;
    theme: {
        color: string;
    };
}

export default function TopClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchClients() {
            try {
                const res = await fetch('/api/clients');
                const data = await res.json();
                if (data.clients) {
                    setClients(data.clients.slice(0, 3)); // Show top 3
                }
            } catch (error) {
                console.error('Failed to fetch clients:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchClients();
    }, []);

    if (loading) {
        return <div className="py-12 text-center">Loading showcase...</div>;
    }

    if (clients.length === 0) {
        return null; // Don't show section if no clients
    }

    return (
        <section id="showcase" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Trusted by Top Creatives</h2>
                    <p className="mt-4 text-lg text-gray-500">Join thousands of designers, developers, and artists.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client) => (
                        <Link
                            key={client._id}
                            href={`http://${client.subdomain}.localhost:3000`} // Note: This assumes localhost for dev
                            className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for client preview/cover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                                <span className="relative text-4xl font-bold text-gray-300 uppercase tracking-widest">
                                    {client.name.substring(0, 2)}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center space-x-4">
                                    {client.logo ? (
                                        <img src={client.logo} alt={client.name} className="w-10 h-10 rounded-full object-cover" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            {client.name[0]}
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {client.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">@{client.subdomain}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
