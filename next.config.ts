import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Hindari optimasi gambar bawaan Next.js
    domains: ["https://ldmjio-shgiy-rghaiajiuhhbjhdauh-coinzonenjnjiseadniehia-fpld.vercel.app/"], // Ganti dengan domain Vercel Anda jika perlu
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/_next" : "", // Tambahkan prefix asset jika diperlukan
  trailingSlash: true, // Memastikan path konsisten di deployment
  reactStrictMode: true, // Untuk debugging lebih baik
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|mov|ogg|webm|avi)$/, // Tambahkan dukungan untuk video
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
