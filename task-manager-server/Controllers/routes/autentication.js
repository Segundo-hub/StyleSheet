const jwt = require('jsonwebtoken');

module.exports.createJWT = (email, userId, duration) => {
    const payload = {
        email,
        userId,
        duration
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: duration
    })
}