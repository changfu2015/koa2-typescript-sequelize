// import bcrypt from "bcryptjs";
// import sequelize from "../../core/db";
import { Model, HasOne, Table, Column, DataType, PrimaryKey, AutoIncrement, Unique, Comment, ForeignKey, AllowNull } from "sequelize-typescript";
import UsersInfo from "./usersInfo"
@Table
class Users extends Model<Users>{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Comment("ID")
    @Column(DataType.INTEGER)
    id?: number

    @Comment("用户名")
    @Column(DataType.CHAR(11))
    name?: string;

    @Comment("用户密码")
    @Column(DataType.STRING(64))
    password?: string;

    // @ForeignKey(() => UserInfo)
    // @AllowNull
    // @Column(DataType.INTEGER)
    // @Unique
    // @Comment("用户信息标外键")
    // @HasOne(() => UsersInfo, "uId")
    // usersInfo?: UsersInfo;
}

export default Users