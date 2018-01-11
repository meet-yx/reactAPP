/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const pool = require("./sqlPool.js");
const egFun = (sql, data)=> {
    return new Promise((resolve, reject) => {
        pool.query(sql, data)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

module.exports = {
    //用户登录时判断电话号码
    userLoginTel(userTel, pwd){
        console.log("userlogin")
        let sql = `select * from users where tel=? and u_pwd=? and state = 1 `;
        return egFun(sql, [userTel, pwd])
    },
    //查看个人信息
    userList(id){
        let sql = `select * from users where state=1 and u_id=?`;
        return egFun(sql, [id])
    },
    //修改密码
    userUpdatePwd(pwd, id){
        let sql = `UPDATE users SET u_pwd=? WHERE u_id=?`;
        return egFun(sql, [pwd, id])
    },
    //编辑资料
    userUpdate(name, id){
        let sql = `UPDATE users SET u_name=? WHERE u_id=?`;
        return egFun(sql, [name, id])
    },


    //查看分享信息
    userCollectList(id){
        let sql = `SELECT * FROM enjoy AS e LEFT JOIN users AS u ON e.u_id=u.u_id WHERE e.e_state=1 AND u.u_id=?`;
        return egFun(sql, [id])
    },
    //删除分享信息
    userEnjoyDelete(id){
        let sql = `UPDATE enjoy SET e_state=0 WHERE e_id=?`;
        return egFun(sql, [id])
    },
    //注册
    addUser(arr) {
        console.log(arr)
        if (arr.length == 3) {
            let sql = `update users set u_pwd=? where tel=?`;
            return egFun(sql, arr)
        }
        else {
            let sql = `INSERT INTO users VALUES (NULL,default,?,?,default,default,default)`;
            return egFun(sql, arr)

        }
    },
    //判断手机号是否存在
    userDao(arr){
        console.log(arr)

        var sql = 'SELECT * FROM users WHERE 1=1';
        if (arr.length >= 1) {
            sql += ' and tel=?'
        }
        if (arr.length == 2) {
            sql += ' and u_pwd=?'
        }
        return egFun(sql, [arr])
    }
};