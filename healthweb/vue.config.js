module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5000, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false
  },
}