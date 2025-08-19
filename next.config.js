/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['res.cloudinary.com'],
  },
  images: {
    unoptimized: true, // necesario para exportar imágenes
  },
  basePath: "/portfile", // nombre de tu repo en GitHub
};

module.exports = nextConfig;
