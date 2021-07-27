exports.Headers = (req, res, next) => {
    res.headers("Access-Control-Allow-Origin", "*");
    res.headers(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept,  Authorization"
    );
    next()
};