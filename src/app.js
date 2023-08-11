const express = require("express")
const app = express()
const { PORT } = require("./config.js")
const { logger } = require("./middlewares")

// Middlewares
app.use(express.static("public"))
app.use(logger)

// Routers
const mainRouter = require("./routes/index.js")
const apiRouter = require("./routes/api/index.js")
app.use("/", mainRouter)
app.use("/api", apiRouter)

// 404
app.get("*", function (req, res) {
    res.status(404).json({
        err: "http_404",
        statusCode: 404,
        message: "Not Found",
    })
})

app.listen(PORT, () => {
    console.log(`Plate Generator app listening on port ${PORT}`)
})
