/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: "export",

  productionBrowserSourceMaps: false,

  // Optional: put static files in /out
  distDir: "out",
};

export default nextConfig;
