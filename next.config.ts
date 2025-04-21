import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true ,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
//   //   experimental: {
//   //   ppr: "incremental",
//   //   after: true,
//   // },
//   devIndicators: {
//     appIsrStatus: true,
//     buildActivity: true,
//     buildActivityPosition: "bottom-right",
//   },
// };

// experimental: {
//   // ppr: "incremental",
//   // ✅ Remove `after`, it's not a valid config
// },
devIndicators: {
  position: "bottom-right", // ✅ use this instead of buildActivityPosition
},
}

export default nextConfig;
