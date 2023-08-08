const express = require("express")
const app = express()
const port = 3000
// const generatePlate = require("./generatePlate.js")
const mainRouter = require("./routes/index.js")
const { logger } = require("./middlewares")

// Middlewares
app.use(express.static("public"))
app.use(logger)

app.use("/", mainRouter)

// app.get("/generatePlate", async (req, res) => {
//     let plate = req.query.plate
//     let plateText = req.query.plateText
//     let plateType = req.query.plateType
//     let fontSize = req.query.fontSize

//     if (plate === "" || plate === undefined) {
//         return res.json({ error: "Plaka Uyruğu Girilmedi" })
//     } else if (plateText === "" || plateText === undefined) {
//         return res.json({ error: "Plaka Yazısı Girilmedi" })
//     }

//     await generatePlate(plate, plateText, plateType, fontSize)
//     res.sendFile(__dirname + "/public/image.png")
// })

app.get("*", function (req, res) {
    res.status(404).json({
        err: "http_404",
        statusCode: 404,
        message: "Not Found",
    })
})

app.listen(port, () => {
    console.log(`Plate Generator app listening on port ${port}`)
})
