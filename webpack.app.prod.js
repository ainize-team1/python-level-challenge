const webpack = require('webpack')
const path = require('path')

const config = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-export-default-from',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-transform-runtime'
                    ]
                }
            },
        }, {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: (file) => {
                          let path = file.split("src/static/img")[1];
                          return path;
                        }
                    }
                },
            ],
        }]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.join(__dirname, 'dist', 'lib-manifest.json'))
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env': { BROWSER: JSON.stringify(true) }
        })
    ],
    node: {
        fs: 'empty'
    }
}

module.exports = config
