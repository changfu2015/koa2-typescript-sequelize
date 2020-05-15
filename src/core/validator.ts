/*
 * @Descripttion:validator 参数验证抽象类
 * @version:1.0
 * @Author: chagnfu
 * @Date: 2020-05-14 12:00:44
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 16:38:50
 * @email: changfu_chen@qq.com
 */
import { validateOrReject, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator"
import { Context } from "koa"
import { cloneDeep } from "lodash"
import { ParametersException } from "../core/exception"
interface ErrorValidator {
    target: any
    property: string,
    value: any,
    constraints: any
}


export abstract class Validator {
    async validate(ctx: Context) {
        // 测试ctx request 是否存在body
        const params = {
            ...ctx.body,
            ...ctx.request.query,
            ...ctx.params
        }
        const data = cloneDeep(params);
        for (let key in params) {
            this[key] = params[key]
        }
        try {
            await validateOrReject(this);
            return data;
        } catch (errors) {
            let errorResult: string[] = [];
            errors.forEach((error: ErrorValidator) => {
                let messages: string[] = [];
                for (let msg of error.constraints) {
                    messages.push(error.constraints[msg])
                }
                errorResult = errorResult.concat(messages)
            });
            throw new ParametersException({ msg: errorResult })

        }
    }
}
