const nextConfig = {
  webpack(config: any) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: ['file-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
