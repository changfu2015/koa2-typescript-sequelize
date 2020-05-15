/*
 * @Descripttion:
 * @version:1.0
 * @Author: chagnfu
 * @Date: 2020-05-14 17:09:53
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-14 17:58:03
 * @email: changfu_chen@qq.com
 */
import { RegisterInterface } from "../interface/UserInterface"
import { Failed } from "../../core/exception"
import Users from "../models/users"
export class UserService {
    static async userRegister(params: RegisterInterface) {
        const { email, nickname, password1 } = params;
        const data = {
            email,
            nickname,
            password: password1
        }
        const isExistEmail = await Users.findOne({
            where: {
                email
            }
        })
        if (isExistEmail) {
            throw new Failed({ msg: "Email已存在" });
        }
        const r = await Users.create(data);
        return r;
    }
}
export default UserService;