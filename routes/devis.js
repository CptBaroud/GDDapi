let express = require('express');
let jwt = require('jsonwebtoken');

let router = express.Router();
let devis = require('../models/devis');

const JWT_SECRET_SIGN = 'ThWmZq4t7w!z%C*F-J@NcRfUjXn2r5u8PeShVmYq3t6w9z$C&F)J@McQfTjWnZrG-KaPdSgVkYp3s6v9y$B&E)H@MbQeThW%D*F-JaNdRgUkXp2s5v8y/B?E(H+KbPew!z%C*F)J@NcRfUjXn2r5u8x/A?D(G+K';

/**
 * Route pour récupérer tout les deviseurs
 */
router.get('/', function (req, res) {
    devis.getDevis(function (error, rows) {
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

module.exports = router;