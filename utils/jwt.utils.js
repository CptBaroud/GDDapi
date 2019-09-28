let jwt = require('jsonwebtoken');
let user = require('../models/login');

const JWT_SECRET_SIGN = 'ThWmZq4t7w!z%C*F-J@NcRfUjXn2r5u8PeShVmYq3t6w9z$C&F)J@McQfTjWnZrG-KaPdSgVkYp3s6v9y$B&E)H@MbQeThW%D*F-JaNdRgUkXp2s5v8y/B?E(H+KbPew!z%C*F)J@NcRfUjXn2r5u8x/A?D(G+K';

module.exports = {
    generatedToken: function () {
        return jwt.sign({
            userId: user.username,
            email: user.email,
        }, JWT_SECRET_SIGN)
    }
};