/*
 * @Descripttion: 
 * @version: 
 * @Author: chagnfu
 * @Date: 2020-05-07 19:06:05
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 18:08:14
 * @email: changfu_chen@qq.com
 */
import Koa from "koa";
// import Router from "koa-router"
import sequelize_ from "./core/db"
import { InitManager } from "./core/init"
import catchError from "../src/middlewares/exception"
const app: Koa = new Koa();
// const router: Router = new Router()

sequelize_.authenticate().then(() => {
    console.log("链接成功");
}).catch(() => {
    console.log("链接失败");
});
sequelize_.sync({
    force: true
})


// 处理post body

// 全局异常处理
// app.use(catchError)
// 初始化导入模块
new InitManager(app);


app.listen(3000);
console.log("Server running on port 3000");
