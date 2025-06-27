module.exports = {
  'version': 1,
  'snapshot': {
    'widths': [375, 672, 1440],
    'min-height': 1200, // px
    'percy-css': `
        iframe {
            display: none;
        }`
  },
  'agent': {
    'asset-discovery': {
      'network-idle-timeout': 150, // ms
      'cache-responses': true,
      'page-pool-size-min': 5, // pages
      'page-pool-size-max': 20 // pages
    }
  }
};
