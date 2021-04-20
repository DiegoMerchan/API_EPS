const { Router } = require('express');
const router = Router();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '3.139.66.15',
    user: 'coviduser',
    password: 'covidpassword',
    database: 'coviddb'

});

//router.get('/test', (req, res) => {
//    const data = {
//        "name": "Arquitectura de software",
//        "Grupo": "2"

//    };
//    res.send(data);
//});


async function main(){
    try{
        let conn = await pool.getConnection();
        let rows = await conn.query("SELECT * from control");
        console.log(rows);
    }catch(err){
        
    }
}

main();


module.exports = router;

