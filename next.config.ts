import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Include metadata in the initial HTML for all link-preview clients.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
