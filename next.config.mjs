// GITHUB_PAGES=true builds a static export into out/, served under NEXT_PUBLIC_BASE_PATH (e.g. "/kwirky-website").
const pages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(pages && { output: "export", trailingSlash: true, basePath }),
};
export default nextConfig;
