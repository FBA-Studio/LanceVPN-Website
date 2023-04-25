const mysql = require('mysql');
const fs = require('fs');

var database = JSON.parse(fs.readFileSync('config.json', 'utf8'));

module.exports = {
    getUsers: function() {
        
    }
}
