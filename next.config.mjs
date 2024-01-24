/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static-us.exoticca.com"
            },
            {
                protocol: "https",
                hostname: "uploads.exoticca.com"
            }
        ]
    }
};

export default nextConfig;
