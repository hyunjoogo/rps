const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    // 확장자 가지고 오기
    extensions: [".js", ".jsx"],
  },

  entry: {
    // 입력
    app: ["./client"],
    // 입력하고 싶은 파일들 (현재 client에서 WordRelay를 불러오고 있기때문에 굳이 WordRelay는 안가지고 와도 된다.)
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    // 출력
    path: path.join(__dirname, "src"), // __dirname -> 현재폴더 안에 / src -> 원하는 폴더
    filename: "app.js", // 원하는 파일 이름
  },
};
