/*
 * @Descripttion:全局error处理中间件
 * @version:1.0
 * @Author: chagnfu
 * @Date: 2020-05-13 15:00:52
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 17:33:16
 * @email: changfu_chen@qq.com
 */

import { BaseContext, Next } from "koa"
import { HttpException, Exception } from '../core/exception'

interface CatchError extends Exception {
    request?: string;
}

const catchError = async (ctx: BaseContext, next: Next) => {
    try {
        await next();
    } catch (error) {
        const isHttpException = error instanceof HttpException;
        // 判断是否http错误
        const isDev = global.config?.environment === "dev";
        if (isDev && !isHttpException) {
            throw error;
        }
        if (isHttpException) {
            const errorObj: CatchError = {
                code: error.code,
                msg: error.msg,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.body = errorObj;
            ctx.status = errorObj.code as number;
        } else {
            // 感觉这里没用
            const errorOjb: CatchError = {
                code: error.code,
                msg: "出现异常",
                errorCode: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.body = errorOjb;
            ctx.status = 500;
        }
    }
}

export default catchError;