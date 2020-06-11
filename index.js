const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const cors = require('cors')

// Support JSON-encoded bodies
app.use(express.json());
// Support URL-encoded bodies
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())



app.get('/api/Utilisateurs', (req, res) => {
    connection.query(`SELECT * from Utilisateurs`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/Produits', (req, res) => {
    connection.query(`SELECT * from Produits`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des produits');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/Panier', (req, res) => {
    connection.query(`SELECT * from Panier`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération du panier');
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/Utilisateurs', (req, res) => {
    const formData = req.body;
    connection.query(`INSERT INTO Utilisateurs SET ?`, formData, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.post('/api/Produits', (req, res) => {
    const formData = req.body;
    connection.query(`INSERT INTO Produits SET ?`, formData, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'un produit");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/Utilisateurs/:name', (req, res) => {
    const nameUtilisateurs = req.params.name;
    const formData = req.body;
    connection.query(`UPDATE Utilisateurs SET ? WHERE name = ?`, [formData, nameUtilisateurs], err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un utilisateur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.delete('/api/Utilisateurs/:name', (req, res) => {
    const nameUtilisateurs= req.params.id;
    connection.query(`DELETE FROM Utilisateurs WHERE name = ?`, [nameUtilisateurs], err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un utilisateur");
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
  });