import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/fonts/:font*",
        headers: [
          {
            key: "Content-Type",
            value: "font/otf",
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
});

export default nextConfig;
