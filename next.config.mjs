

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
            {
                protocol: 'https',
                hostname: 'imgs.search.brave.com',
            }
        ]
    }
};

export default nextConfig;