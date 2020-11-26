// 导入
const querystring = require("querystring");
const fs = require("fs");

// 定义中间件（本质就是一个函数）
const csBodyParse = (req, res, next) => {
    let myDate = new Date()
    fs.appendFile(`./${myDate.getFullYear()}${myDate.getMonth()}${myDate.getDate()}.log`,`${req.ip} ${myDate} ${req.headers.host} ${req.method} ${req.headers['user-agent']}\n`,(err) => {
        next();
    })

};

// 导出
module.exports = csBodyParse;
