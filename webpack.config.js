'use strict'

const path = require('path')

module.exports ={
    mode:'production',
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader'
            },
            {
                test:/.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/.(jpg|png|svg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:20480,
                        },
                    },
                ]
            },
            {
                test:/.(woff|woff2|eot|ttf|otf)$/,
                use:'file-loader'
            }
        ]
    }
}