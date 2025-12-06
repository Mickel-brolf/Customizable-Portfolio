import connectDB from "@/lib/db";
import Client from "@/models/Client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const clients = await Client.find({});
        return NextResponse.json({ clients }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const client = await Client.create(body);
        return NextResponse.json({ client }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
