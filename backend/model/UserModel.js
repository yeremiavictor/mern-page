import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// @ts-ignore
const {DataTypes} = Sequelize;

const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName: true
})

export default User;

(async()=>{
    await db.sync();
})()