/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other Next.js config options here
    eslint: {
        // Ignores ESLint during production build and allows the build to continue even if there are ESLint errors
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Ignores TypeScript errors during production build and allows the build to continue even if there are TypeScript errors
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
