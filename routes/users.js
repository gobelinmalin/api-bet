const express = require('express');
const router = express.Router();
const connection  = require('../config');

// ajout d"une donnée
router.post('/', (req, res) => {

  const data = req.body;

  connection.query('INSERT INTO user SET ?', data, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// récupération de liste
router.get('/', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// récupération d"une donnée
router.get('/:id', (req, res) => {
  const idParams = req.params.id;
  connection.query('SELECT * FROM user WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.json(results)
    }
  })
})

// modification d"une donnée
router.put('/:id', (req, res) => {

  const idParams = req.params.id;
  const data = req.body;

  connection.query('UPDATE user SET ? WHERE id = ?', [data, idParams], (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// suppression d"une donnée
router.delete('/:id', (req, res) => {

  const idParams = req.params.id;

  connection.query('DELETE FROM user WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// recupération recupération des pari d'un parieur
router.get('/:idUser/bets', (req, res) => {
  const idUser = req.params.idUser;

  connection.query('SELECT * FROM bet as b JOIN user as u ON u.id = b.id_user WHERE b.id_user = ?', idUser, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// recupération des pari d'un parieur
router.get('/:idUser/challenges', (req, res) => {
  const idUser = req.params.idUser;

  connection.query('SELECT * FROM bet as b JOIN user as u ON u.id = b.id_user WHERE b.id_challenger = ?', idUser, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// recupération recupération des pari d'un parieur
router.get('/:id/friends', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT u.id as is_user, f.id_friend FROM user as u JOIN friend as f ON u.id = f.id_user WHERE (u.id = ?)OR (f.id_friend = ?)', [id, id], (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})


module.exports = router; 