const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'anaisreau8903130Rxd', // le mot de passe
database :  'DojoLong', // le nom de la base de données
});
module.exports = connection;