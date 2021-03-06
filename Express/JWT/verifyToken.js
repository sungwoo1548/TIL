const jwt = require("jsonwebtoken");

module.exports = function (req) {
    let data = null;
    let error = null;

    const token = req.header("Authorization");
    const secretKey = process.env.TOKEN_KEY || "secret"
    if (!token) {
        error = "check your header Authorization";
        return { data, error };
    }
    try {
        const decoded = jwt.verify(token, secretKey)
        data = decoded;
    } catch (e) {
        if (e.message === "jwt expired") error = "expired";
        if (e.message === "invalid token") error = "invalid"
    } finally {
        if (!data && !error) error = "unknown"
        return { data, error };
    }



    return { data, error };
};