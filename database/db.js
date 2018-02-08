const mysql = require('mysql');
var DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'android6699'
});
DB.connect((err)=>{
    if(err)
        console.log(err);
    console.log('Connected to DB');
});