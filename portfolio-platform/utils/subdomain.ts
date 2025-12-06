export function getSubdomain(host: string | null): string | null {
    if (!host) return null;

    const subdomain = host.split('.')[0];
    if (subdomain === 'www' || subdomain === 'portfoliohub' || subdomain === 'localhost:3000') return null;

    return subdomain;
}
