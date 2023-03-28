/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// const nextConfig = {
//   // other valid and allowed properties
//   future: {
//     webpack5: true,
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.cache = {
//         type: "filesystem",
//         buildDependencies: {
//           config: [__filename],
//         },
//       };
//     }

//     return config;
//   },
// };

// module.exports = withPlugins(
//   [
//     [
//       optimizedImages,
//       {
//         // image optimization options
//       },
//     ],
//   ],
//   nextConfig
// );

module.exports = nextConfig;
