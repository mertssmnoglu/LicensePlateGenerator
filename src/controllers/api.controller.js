const Canvas = require("../util/Canvas")

async function generatePlate(req, res) {
    const { text } = req.query

    if (!text || text.length < 1)
        return res.status(401).json({
            status: 401,
            message: "Plate text must at least 1 character",
        })

    const plateName = `plate_${text}-${Date.now()}`
    const plate = new Canvas(1750, 415)
    await plate.fill(text, 308, "Deutschland_1")
    plate.export(plateName)
    res.sendFile(`${plateName}.png`, { root: "build/plates" })
}

module.exports = {
    generatePlate,
}
