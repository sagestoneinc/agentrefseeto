import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

// When deploying to GitHub Pages under a repository subpath, set a base path so
// static asset links resolve correctly. Use NEXT_PUBLIC_BASE_PATH to allow
// overriding in other environments (leave empty for root deployments).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/agentrefseeto";

const finalConfig: NextConfig = {
  ...nextConfig,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default finalConfig;
