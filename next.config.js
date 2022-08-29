/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['https://server.arcgisonline.com'],
  },
  env:{
    mapbox_token:'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
  },
  webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.geojson$/,
      loader: 'json-loader'
    });

    // Important: return the modified config
    return config
  },
}
