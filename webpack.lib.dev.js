const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        'lib': [
            'react',
            'react-dom',
            'react-router-dom',
            'styled-components',
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        library: '[name]_lib'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_lib'
        })
    ],
    node: {
        fs: 'empty'
    }
}
