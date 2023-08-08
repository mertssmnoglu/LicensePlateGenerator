function logger(req, res, next) {
    const remoteAddress = req.socket.remoteAddress

    const data = {
        method: req.method,
        path: req.path,
        remoteAddress,
        body: req.body || {},
    }

    console.log(new Date(), data)
    next()
}

module.exports = logger
