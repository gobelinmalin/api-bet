const express = require('express');
const router = express.Router();
const connection  = require('../config');

// ajout d"une donnée
router.post('/', (req, res) => {

  const data = req.body;

  connection.query('INSERT INTO bet SET ?', data, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// récupération de liste
router.get('/', (req, res) => {
  connection.query('SELECT * FROM bet', (err, results) => {
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
  connection.query('SELECT * FROM bet WHERE id = ?', idParams, (err, results) => {
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

  connection.query('UPDATE bet SET ? WHERE id = ?', [data, idParams], (err, results) => {
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

  connection.query('DELETE FROM bet WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// recupération des joueurs
router.get('/:id/players', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT be.id_user, be.id_challenger, bi.id_user as id_player, bi.price, bi.side, bi.id FROM bet as be JOIN bidder as bi ON bi.id_bet = be.id WHERE bi.id_bet = ?', id, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

module.exports = router; 