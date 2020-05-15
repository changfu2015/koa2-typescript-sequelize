/*
 * @Descripttion: 
 * @version: 
 * @Author: chagnfu
 * @Date: 2020-05-08 17:19:33
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 16:53:40
 * @email: changfu_chen@qq.com
 */

import Router from "koa-router"
import { getFiles } from "./utils"
import Koa from "koa"
import { config, ConfigInterface } from "../config/config";
/**
 * 扩展全局变量需要在扩展对象中声明
 * @name: global
 * @return: 扩展全局global对象
 */
declare global {
    namespace NodeJS {
        interface Global {
            config?: ConfigInterface;
        }
    }
}

/**
 * 初始加载models
 */
class InitManager {
    private app: Koa
    constructor(app: Koa) {
        this.app = app;
        this.initLoadRouters()
    }
    /**
     *自动加载路由
   * @memberof InitManager
   */
    initLoadRouters() {
        const path: string = `${process.cwd()}/src/app/api`;
        const files: string[] = getFiles(path);
        for (let path of files) {
            const filesType = path.substring(path.lastIndexOf('.'), path.length);
            // 判断是否ts文件
            if (filesType === '.ts') {
                const routerFile: Router = require(path);
                console.log(routerFile)
                this.app.use(routerFile.routes())
            }

        }

    }
    /**
     * @name: 初始化加载配置文件
     * @return: 
     */
    loadConfig() {
        global.config = config
    }
}
export { InitManager }