module.exports = {
    entry: {
        index: './src/index.js'

    },
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,//testando os arquivos com o final .css
            use: ['style-loader', 'css-loader']
        },{
    
        test: /\.js$/,//testando os arquivos com o final .js
        use: ['babel-loader']
    }]
    },
    output: {
        filename: '[name].min.js'
    }
}