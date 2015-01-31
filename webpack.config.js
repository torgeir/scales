module.exports = {
  context: __dirname,
  entry: {
    'app': './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].entry.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          '6to5-loader?experimental&optional=selfContained'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          "style-loader",
          "css-loader",
          "autoprefixer-loader?browsers=last 2 version",
          "less-loader?strictMath&cleancss"
        ]
      }
    ]
  }
};
