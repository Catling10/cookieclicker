const path = require("path");

module.exports = {
    entry: {index: path.resolve(__dirname, "", "script.js")},
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: []
            }
        ]
    }
};