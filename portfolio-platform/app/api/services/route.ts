import connectDB from "@/lib/db";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const clientId = searchParams.get('clientId');

        const query = clientId ? { clientId } : {};
        const services = await Service.find(query);

        return NextResponse.json({ services }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
