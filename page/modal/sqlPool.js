/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const mysql=require("promise-mysql");

var pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"yx411",
    port:3306,
    database:"app",
    connectionLimit:10
});

module.exports=pool;