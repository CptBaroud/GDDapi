let db = require('../dbconnection');

let Comment = {
    getDeviseurs : function(callback){
        return db.query("SELECT * FROM leny.deviseur", callback);
    },
    getDeviseurByName : function (deviseur, callback) {
       return db.query("SELECT * FROM deviseur WHERE Prenom=?", [deviseur], callback);
    },
    getDeviseurByCode : function (code, callback) {
       return db.query("SELECT * FROM deviseur WHERE Code=?",  [code], callback);
    },
    getDeviseurBySecteur : function (secteur, callback) {
        return db.query("SELECT * FROM deviseur WHERE Secteur=?", [secteur], callback);
    },
    updateDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET Nom=?, Prenom=?, Secteur=? WHERE Code=?", [deviseur.nom, deviseur.prenom, deviseur.secteur, code], callback);
    },
    updateInfoDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET Nom=?, Prenom=? WHERE Code=?", [deviseur.nom, deviseur.prenom, code], callback);
    },
    updateNomDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET Nom=? WHERE Code=?", [deviseur.nom, code], callback);
    },
    updatePrenomDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET Prenom=? WHERE Code=?", [deviseur.prenom, code], callback);
    },
    updateDateFinDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET DateFin=? WHERE Code=?", [deviseur.dateFin, code], callback);
    },
    updateSecteurDeviseur : function(code, deviseur, callback) {
        return db.query("UPDATE deviseur SET Secteur=? WHERE Code=?", [deviseur.secteur, code], callback);
    },
    addDeviseur : function (deviseur, callback){
        return db.query("INSERT INTO deviseur VALUE(?,?,?,?)", [deviseur.code, deviseur.nom, deviseur.prenom, deviseur.secteur], callback)
    }
};

module.exports = Comment;

