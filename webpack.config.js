const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            }, ],
            exclude: /node_modules/,
        }, ],
    },
    //devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node16.13',
    node: {
        __dirname: false,
        __filename: false,
    },
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
};