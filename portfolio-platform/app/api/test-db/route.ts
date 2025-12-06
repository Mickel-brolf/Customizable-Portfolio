import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ status: "Connected to MongoDB" }, { status: 200 });
    } catch (error) {
        console.error("Database connection failed:", error);
        return NextResponse.json({ status: "Failed to connect to MongoDB", error: (error as Error).message }, { status: 500 });
    }
}
