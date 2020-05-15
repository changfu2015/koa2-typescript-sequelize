/*
 * @Descripttion:全局异常处理
 * @version:1.0
 * @Author: chagnfu
 * @Date: 2020-05-12 18:02:58
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 17:30:53
 * @email: changfu_chen@qq.com
 */
import assert from "assert"
import { isInteger } from "lodash"
export interface Exception {
    code?: number,//http状态码
    msg?: any;//返回提示内容
    errorCode?: number;//特定错误码
}

/**
 *  异常处理基类
 * @name: HttpException
 * @return: 
 */
export class HttpException extends Error {
    /**
     * http状态码
     */
    protected code: number = 500;
    protected msg: string = "服务器未知错误！";
    protected errorCode: number = 500;
    public fields: string[] = ["msg", "errorCode"];

    constructor(ex?: Exception) {
        super();
        if (ex && ex.code) {
            assert(isInteger(ex.code));
            this.code = ex.code;
        }
        if (ex && ex.msg) {
            this.msg = ex.msg;
        }
        if (ex && ex.errorCode) {
            assert(isInteger(ex.errorCode));
            this.errorCode = ex.errorCode;
        }
    }
}



/**
 * 成功
 * @name: Success
 * @param Exception
 * @return:
 */
export class Success extends HttpException {
    constructor(ex?: Exception) {
        super();
        this.code = 200;
        // this.code
    }
}

/**
 * 失败
 * @name: Failed
 * @param {type} 
 * @return: 
 */
export class Failed extends HttpException {

    constructor(ex?: Exception) {
        super();
        this.init();
        if (ex && ex.code) {
            assert(isInteger(ex.code));
            this.code = ex.code;
        }
        if (ex && ex.msg) {
            this.msg = ex.msg;
        }
        if (ex && ex.errorCode) {
            assert(isInteger(ex.errorCode));
            this.errorCode = ex.errorCode;
        }
    }
    init() {
        this.code = 400;
        this.msg = "失败";
        this.errorCode = 9999;
    }

}

export class ParametersException extends HttpException {
    constructor(ex?: Exception) {
        super()
        this.init();
        if (ex && ex.code) {
            assert(isInteger(ex.code));
            this.code = ex.code;
        }
        if (ex && ex.msg) {
            this.msg = ex.msg;
        }
        if (ex && ex.errorCode) {
            assert(isInteger(ex.errorCode));
            this.errorCode = ex.errorCode;
        }
    }
    init() {
        this.code = 400;
        this.msg = "参数错误";
        this.errorCode = 10030;
    }
}