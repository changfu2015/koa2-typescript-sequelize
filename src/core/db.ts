/*
 * @Descripttion: 数据库配置文件
 * @version: 1.0
 * @Author: chagnfu
 * @Date: 2020-05-06 16:28:37
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-13 19:21:34
 * @email: changfu_chen@qq.com
 */
import { config } from '../config/config'
import { Sequelize } from "sequelize-typescript"

const { dbName, port, host, user, password } = config.dataBase;
// 初始化Sequelize
const sequelize: Sequelize = new Sequelize(
    dbName,
    user,
    password,
    {
        dialect: "mysql",
        host,
        port,
        logging: true,//是否打印日志
        timezone: "+08:00",
        models: [process.cwd() + '/src/app/models'],
        define: {
            timestamps: true,//为模型添加 createdAt 和 updatedAt 两个时间戳字段
            paranoid: true,
            underscored: true, // 转换列名的驼峰命名规则为下划线命令规则
            freezeTableName: true // 转换模型名的驼峰命名规则为表名的下划线命令规则
        }
    }
);
export default sequelize;