import merge from 'webpack-merge'
import common from '../webpack.js'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'

export let config = merge(common, {
  devtool: 'cheap-module-source-map',
  plugins: [
    // Show Dashboard
    new DashboardPlugin(),
    new HtmlWebpackHarddiskPlugin()
  ]
})

module.exports = { config }
