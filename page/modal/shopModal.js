/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const pool=require("./sqlPool.js");

module.exports={
    //首页——发现列表
    findList(){
        let sql=`SELECT * FROM shoplist`;
        return new Promise((resolve,reject)=>{
            pool.query(sql, [])
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (err) {
                    console.log(err);
                    reject(err);
                })
        })
    },
    //发现详情页
    findDetail(id){
        let sql = `SELECT * FROM find_det AS f LEFT JOIN shoplist AS s ON f.s_id=s.s_id WHERE s.s_id=?`;
        return new Promise((resolve,reject)=>{
            pool.query(sql, [id])
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (err) {
                    console.log(err);
                    reject(err);
                })
        })
    },
    //显示品牌列表
    brandList(name,brandImg,id){

        let sql=`select b_name,b_img from band where state=1`;
        return new Promise((resolve,reject)=>{
            pool.query(sql, [name,brandImg,id])
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (err) {
                    reject(err);
                })
        })
    },
    //显示视频列表
    showList(){
        let sql=`select * from video where state=1`;
        return new Promise((resolve,reject)=>{
            pool.query(sql, [])
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (err) {
                    reject(err);
                    console.log(err)
                })
        })
    },
    //删除视频列表
    showDelete(id){
        let sql=`update video set state=0 where v_id=?`;
        return new Promise((resove,reject)=>{
            pool.query(sql, [id])
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (err) {
                    reject(err);
                })
        })
    }
};