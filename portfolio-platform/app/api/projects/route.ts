import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const clientId = searchParams.get('clientId');

        const query = clientId ? { clientId } : {};
        const projects = await Project.find(query).populate('clientId', 'name subdomain');

        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
