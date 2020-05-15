/*
 * @Descripttion: 
 * @version: 
 * @Author: chagnfu
 * @Date: 2020-05-08 16:46:40
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 19:34:38
 * @email: changfu_chen@qq.com
 */
import Router from "koa-router";
import { Context } from "koa"
import fs from "fs"

import { RegisterInterface } from "../interface/UserInterface"
import { RegistorValidator } from "../../validator/UsersValidator"
const router: Router = new Router();
router.prefix("/api/user");

/*
* 注册
*/
router.post("/register", async (_ctx: Context) => {
    const registerUser: RegisterInterface = await new RegistorValidator().validate(_ctx);
    _ctx.response.body = "注册"
})

// router.post("/text", async (_ctx: Context) => {

//     const files = fs.readFileSync('./md.md.d.d');
//     console.log(files)
// })

module.exports = router 
