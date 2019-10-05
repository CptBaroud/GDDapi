let db = require('../dbconnection');

let devis = {
    getDevis : function(callback){
        return db.query("SELECT * FROM leny.devis", callback);
    },
};

module.exports = devis;

