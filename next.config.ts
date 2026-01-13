import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Optimierungen fuer Bundle-Groesse
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Keine externen Image-Hosts mehr (Sanity entfernt)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default withPayload(nextConfig);
