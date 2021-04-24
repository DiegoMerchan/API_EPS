  
const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db.js');


// GET an user
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * from usuario WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
