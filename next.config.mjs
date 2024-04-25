/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com'
			}
		]
	}
};

export default nextConfig;
