import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get('host') || '';

    // Define allowed domains (including localhost for development)
    const allowedDomains = ['localhost:3000', 'portfoliohub.com', 'www.portfoliohub.com'];

    // Check if the current hostname is in the allowed domains list
    const isMainDomain = allowedDomains.some(domain => hostname.includes(domain));

    // Extract subdomain
    // For localhost:3000, subdomains are like client1.localhost:3000
    // For production, subdomains are like client1.portfoliohub.com

    const currentHost = hostname.replace(`:3000`, ''); // Remove port for simpler parsing
    const subdomain = currentHost.split('.')[0];

    // If it's the main domain or www, do nothing (let Next.js handle normal routing)
    if (subdomain === 'www' || subdomain === 'portfoliohub' || (hostname === 'localhost:3000')) {
        return NextResponse.next();
    }

    // If it's a subdomain, rewrite the path to /subdomain/[subdomain]/...
    // We use the 'subdomain' folder in 'app' to handle these requests

    // Prevent rewrite loop if we're already on the rewritten path (unlikely with this logic but good safety)
    if (url.pathname.startsWith(`/${subdomain}`)) {
        return NextResponse.next();
    }

    // Rewrite the URL to the dynamic route
    // e.g., client1.portfoliohub.com/about -> /client1/about
    // But since we want to map to app/[subdomain], we rewrite to /[subdomain]/path

    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
