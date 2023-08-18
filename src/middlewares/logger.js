function logger(req, res, next) {
    const remoteAddress = req.socket.remoteAddress

    const data = {
        method: req.method,
        path: req.path,
        remoteAddress: remoteAddress,
        body: req.body || {},
        query: req.query || {},
    }

    console.log(new Date(), data)
    next()
}

module.exports = logger
