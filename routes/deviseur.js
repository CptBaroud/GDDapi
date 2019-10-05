let express = require('express');
let jwt = require('jsonwebtoken');

let router = express.Router();
let deviseur = require('../models/deviseur');

const JWT_SECRET_SIGN = 'ThWmZq4t7w!z%C*F-J@NcRfUjXn2r5u8PeShVmYq3t6w9z$C&F)J@McQfTjWnZrG-KaPdSgVkYp3s6v9y$B&E)H@MbQeThW%D*F-JaNdRgUkXp2s5v8y/B?E(H+KbPew!z%C*F)J@NcRfUjXn2r5u8x/A?D(G+K';

/**
 * Route pour récupéré tout les deviseurs
 */
router.get('/', function (req, res) {
    deviseur.getDeviseurs(function (error, rows) {
        jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
            if (err) {
                res.json(err);
            } else {
                if (error) {
                    res.json(error);
                } else {
                    res.json(rows);
                }
            }
        });
    })
});

/**
 * Route pour recupéré les deviseurs par secteurs
 */
router.get('/name/:name?', function (req, res) {
    if (req.params.name) {
        deviseur.getDeviseurByName(req.params.name, function (error, rows) {
            jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                if (err) {
                    res.json(err);
                } else {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json(rows);
                    }
                }
            });
        })
    }
});

/**
 * Route pour recupérer les deviseurs par secteur
 */
router.get('/secteur/:secteur?', function (req, res) {
    if (req.params.secteur) {
        deviseur.getDeviseurBySecteur(req.params.secteur, function (error, rows) {
            jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                if (err) {
                    res.json(err);
                } else {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json(rows);
                    }
                }
            });
        })
    } else {
        res.json("Erreur");
    }
});

/**
 * Route pour recupérer les deviseurs par code
 */
router.get('/code/:code?', function (req, res) {
    if (req.params.code) {
        deviseur.getDeviseurByCode(req.params.code, function (error, rows) {
            jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                if (err) {
                    res.json(err);
                } else {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json(rows);
                    }
                }
            });
        })
    }
});

/**
 * Permet d'ajouter un deviseur
 */
router.post('/', function (req, res) {
    deviseur.addDeviseur(req.body, function (error) {
        jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
            if (err) {
                res.json(err);
            } else {
                if (error) {
                    res.json(error);
                } else {
                    res.json(req.body);//or return count for 1 &amp;amp;amp; 0
                }
            }
        })
    });
});

router.put('/update/:code', function (req, res) {
    if (Object.keys(req.body).length === 3) {
        if (Object.keys(req.body).includes("nom") && Object.keys(req.body).includes("prenom") && Object.keys(req.body).includes("secteur")) {
            deviseur.updateDeviseur(req.params.code, req.body, function (error, rows) {
                jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                    if (error) {
                        res.json(error);
                    } else {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(rows);
                        }
                    }
                });
            });
        } else {
            res.json({
                "Error": "#01",
                "Message ": "Une des clée(s) entrée n'est pas reconnue",
                "InvalidKey": Object.keys(req.body),
                "Validkeys": new Object(["nom", "prenom", "secteur"])
            });
        }
    } else if (Object.keys(req.body).length === 2) {
        if (Object.keys(req.body).includes("nom") && Object.keys(req.body).includes("prenom")) {
            deviseur.updateInfoDeviseur(req.params.code, req.body, function (error, rows) {
                jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                    if (error) {
                        res.json(error);
                    } else {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(rows);
                        }
                    }
                });
            });
        } else {
            res.json({
                "Error": "#01",
                "Message ": "Une des clée(s) entrée n'est pas reconnue",
                "InvalidKey": Object.keys(req.body),
                "Validkeys": new Object(["nom", "prenom", "secteur"])
            });
        }
    } else {
        if (Object.keys(req.body).length === 1) {
            if (Object.keys(req.body).includes("nom")) {
                deviseur.updateNomDeviseur(req.params.code, req.body, function (error, rows) {
                    jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                        if (error) {
                            res.json(error);
                        } else {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json(rows);
                            }
                        }
                    });
                });
            } else if (Object.keys(req.body).includes("prenom")) {
                deviseur.updatePrenomDeviseur(req.params.code, req.body, function (error, rows) {
                    jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                        if (error) {
                            res.json(error);
                        } else {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json(rows);
                            }
                        }
                    });
                });
            } else if (Object.keys(req.body).includes("dateFin")) {
                deviseur.updateDateFinDeviseur(req.params.code, req.body, function (error, rows) {
                    jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                        if (error) {
                            res.json(error);
                        } else {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json(rows);
                            }
                        }
                    });
                });
            } else {
                if (Object.keys(req.body).includes("secteur")) {
                    deviseur.updateSecteurDeviseur(req.params.code, req.body, function (error, rows) {
                        jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
                            if (error) {
                                res.json(error);
                            } else {
                                if (err) {
                                    res.json(err);
                                } else {
                                    res.json(rows);
                                }
                            }
                        });
                    });
                } else {
                    res.json({
                        "Error": "#01",
                        "Message ": "La clée entrée n'est pas reconnue",
                        "InvalidKey": Object.keys(req.body),
                        "Validkeys": new Object(["nom", "prenom", "secteur"])
                    });
                }
            }
        } else {
            res.json({
                "Error": "#02",
                "Message ": "Le nombre de key n'est pas bon",
                "Body": {"Keys": Object.keys(req.body), "Count": Object.keys(req.body).length},
                "Properties": new Object({"Max": "3", "Min": "1"})
            });
        }
    }
});


module.exports = router;