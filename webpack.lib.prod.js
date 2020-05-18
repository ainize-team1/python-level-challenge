const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        'lib': [
            'react',
            'react-dom',
            'react-router-dom',
        ],
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        library: '[name]_lib',
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_lib'
        }),
    ],
    node: {
        fs: 'empty'
    }
}
