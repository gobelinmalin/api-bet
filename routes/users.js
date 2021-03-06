const express = require("express");
const router = express.Router();
const connection = require("../config");

// ajout d"une donnée
router.post("/", (req, res) => {
  const data = req.body;

  connection.query("INSERT INTO user SET ?", data, (err, results) => {
    if (err) {
      res.sendStatus(err);
    }
    connection.query(
      "SELECT * FROM user WHERE id = ?",
      results.insertId,
      (err2, records) => {
        if (err2) {
          return res.sendStatus(500);
        }
        const insertedEntity = records[0];
        const host = req.get("localhost");
        const location = `https://${host}${req.url}/${insertedEntity.id}`;
        res.status(201).set("Location", location).json(insertedEntity);
      }
    );
  });
});

// récupération de liste
router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// récupération d"une donnée
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query(
    "SELECT * FROM user WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(results);
      }
    }
  );
});

// modification d"une donnée
router.put("/:id", (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query(
    "UPDATE user SET ? WHERE id = ?",
    [data, idParams],
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// suppression d"une donnée
router.delete("/:id", (req, res) => {
  const idParams = req.params.id;

  connection.query(
    "DELETE FROM user WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// recupération recupération des pari d'un parieur
router.get("/:idUser/bets", (req, res) => {
  const idUser = req.params.idUser;

  connection.query(
    "SELECT b.id as id_bet, b.title, b.description, b.date_begin,  b.date_end, b.id_user as id_user, b.id_challenger as id_challenger, b.stake, b.proposition, b.status, b.status_end, u.lastname, u.firstname, u.nickname, u.money FROM bet as b JOIN user as u ON u.id = b.id_user WHERE b.id_user = ?",
    idUser,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

// recupération des pari d'un parieur
router.get("/:idUser/challenges", (req, res) => {
  const idUser = req.params.idUser;

  connection.query(
    "SELECT b.id as id_bet, b.title, b.description, b.date_begin, b.date_end, b.id_user as id_user, b.id_challenger as id_challenger, b.stake, b.proposition, b.status, b.status_end, u.lastname, u.firstname, u.nickname, u.money  FROM bet as b JOIN user as u ON u.id = b.id_user WHERE b.id_challenger = ?",
    idUser,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

// recupération recupération des pari d'un parieur
router.get("/:id/friends", (req, res) => {
  const id = req.params.id;

  connection.query(
    "SELECT u.id as id_user, f.id_friend, f.id as id FROM user as u JOIN friend as f ON u.id = f.id_user WHERE (u.id = ?)OR (f.id_friend = ?)",
    [id, id],
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
