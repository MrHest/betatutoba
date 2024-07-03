const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'betatutoba'
});

module.exports = pool;



// module.exports = {
//     multipleStatements  : true,
//     host                : 'localhost',
//     user                : 'root',
//     password            : '',
//     database            : 'betatutoba'
// };