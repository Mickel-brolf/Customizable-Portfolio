import connectDB from "@/lib/db";
import Client from "@/models/Client";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        // Create a dummy client if it doesn't exist
        let client = await Client.findOne({ subdomain: 'test-client' });
        if (!client) {
            client = await Client.create({
                name: 'Test Client',
                subdomain: 'test-client',
                logo: '/logos/test.png',
                theme: { color: '#ff0000', font: 'Arial' }
            });
        }

        // Create a dummy project
        const project = await Project.create({
            clientId: client._id,
            title: 'Test Project',
            description: 'This is a test project',
            images: ['/images/test.jpg'],
            category: 'Web Design'
        });

        return NextResponse.json({
            status: "Models verified",
            client: client,
            project: project
        }, { status: 200 });

    } catch (error) {
        console.error("Model verification failed:", error);
        return NextResponse.json({
            status: "Failed to verify models",
            error: (error as Error).message
        }, { status: 500 });
    }
}
