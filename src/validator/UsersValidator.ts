/*
 * @Descripttion:user模块验证类型
 * @version:
 * @Author: chagnfu
 * @Date: 2020-05-14 16:36:11
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 17:03:43
 * @email: changfu_chen@qq.com
 */
import { Validator } from "../core/validator"
import {
    Length,
    Matches,
    Validate,
    ValidatorConstraintInterface,
    ValidatorConstraint,
    ValidationArguments,
    IsEmail
} from "class-validator";


/**
 * 自定义密码验证
 *
 * @export
 * @class CheckPassword
 * @extends {ValidatorConstraintInterface}
 */
@ValidatorConstraint()
class CheckPassword implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean {
        const obj: any = args.object;
        return obj.password1 === obj.password2;
    }
    defaultMessage() {
        return "两次输入密码不一致"
    }
}

/**
 * 注册验证类
 *
 * @export
 * @class RegistorValidator
 * @extends {Validator}
 */
export class RegistorValidator extends Validator {

    @Length(3, 10, {
        message: "用户名长度为3~10个字符"
    })
    nickname?: string;
    @IsEmail({}, { message: "电子邮箱格式错误" })
    email?: string;
    @Validate(CheckPassword)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, {
        message: "密码至少8-16个字符，至少1个大写字母，1个小写字母和1个数字"
    })
    password1?: string;
    password2?: string;

    constructor() {
        super();
    }


}
