// 导入
const express = require("express");
const fs = require("fs");
const app = express();

// 使用使用自定义的中间件接收post数据
const csBodyParse = require("./middlewares/csBodyParse");
app.use(csBodyParse);

// 路由
app.post("/post", (req, res) => {
    console.log(req.body)

});

// 启动
//0.0.0.0  ip地址v6改成v4
app.listen(8080,'0.0.0.0', () => {
    console.log("server is running at http://127.0.0.1:8080");
});
