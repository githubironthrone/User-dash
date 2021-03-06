const Users = require('../models/users');
const cron = require("node-cron");
const globalConfig = require('../config/global');

const express = require('express');
const app = express();

module.exports.loadUsersByIndex = function(data, res) { 

    Users.loadUsersByIndex(data, (err, results) => {
        console.log("index data : " + JSON.stringify(results));
        res.json({
            result: true,
            data: results,
            msg: "Load users successfully"
        })
   });
}

module.exports.addUsers = function(newUsersData, res) {

   Users.addUsers(newUsersData, (err, results) => {
        console.log('added');

        res.json({
            result: true,
            msg: "add users successfully"
        })
   });
   
}

module.exports.deleteItem = function(data, res) {

    Users.deleteItem(data, (err, results) => {
         
         let idarr = [];
         for(let i = 0; i < results.length; i++) {
            idarr.push(results[i]._id);
         }
         
         Users.rdeleteItem(idarr, (err1, results1) => {
            res.json({
                result: true,
                msg: "delete item successfully"
            })
         });
    });
    
 }


module.exports.getUsersLen = function(res) {

    Users.getUsersLen('', (err, results) => {
         console.log('added');
 
         res.json({
             result: true,
             data: results,
             msg: "add users successfully"
         })
    });
    
 }
 


