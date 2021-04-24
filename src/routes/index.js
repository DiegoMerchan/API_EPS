  
const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db.js');


// GET an user
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * from control WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// GET all Employees
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM control', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });


  // POST insertar usuario

router.post('/', (req, res) => {
    const {id_paciente, id_vacuna, vacunado} = req.body;
    console.log(id_paciente, id_vacuna, vacunado);
    const query = `
     insert into control (id_paciente,id_vacuna,vacunado) values (?,?,?);
    `;
    mysqlConnection.query(query, [id_paciente, id_vacuna, vacunado], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Usuario Guardado'});
      } else {
        console.log(err);
      }
     
    });
  
  });


  // DELETE borrar un usuario 

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM control WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Usuario borrado'});
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;
