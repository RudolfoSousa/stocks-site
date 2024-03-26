/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        brapiApiToken: process.env.BRAPI_API_TOKEN,
        brapiBaseUrl: process.env.BRAPI_BASE_URL
    }
};

export default nextConfig;
