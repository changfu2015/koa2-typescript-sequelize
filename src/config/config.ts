/*
 * @Descripttion: 
 * @version: 
 * @Author: chagnfu
 * @Date: 2020-05-06 16:37:24
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-13 18:35:40
 * @email: changfu_chen@qq.com
 */
interface ConfigInterface {
    dataBase: DataBaseInterface,
    environment: string
}
interface DataBaseInterface {
    dbName: string, //数据库名称
    host: string, //数据地址
    port: number, //数据库端口
    user: string, // 数据库用户名
    password?: string //数据库密码
}
const config: ConfigInterface = {
    environment: "dev",
    dataBase: {
        dbName: 'koa_web',
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root'
    }
}
export { config, ConfigInterface, DataBaseInterface };