// import sequelize from "../../core/db"
import { Table, ForeignKey, Model, DataType, Unique, AutoIncrement, Column, Comment, PrimaryKey, BelongsTo } from "sequelize-typescript";
import Users from "./users"
@Table

class UsersInfo extends Model<UsersInfo>{
    @Unique
    @AutoIncrement
    @PrimaryKey
    @Comment("ID")
    @Column(DataType.INTEGER)
    id?: number;

    @Column(DataType.ENUM('男', '女'))
    gender?: string

    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    uId?: number

    @BelongsTo(() => Users)
    users?: Users
}

export default UsersInfo 
