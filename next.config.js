const isProd = process.env.NODE_ENV === "production";
const basePath = "/metatrial.io";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? basePath : "",
  assetPrefix: isProd ? basePath : "",
};

module.exports = nextConfig;
