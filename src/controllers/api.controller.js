const Canvas = require("../util/Canvas")

async function generatePlate(req, res) {
    const plateName = `plate_${Date.now()}`
    const plate = new Canvas(1750, 415)
    await plate.fill("Deneme", 308, "Deutschland_1")
    plate.export(plateName)
    res.sendFile(`${plateName}.png`, { root: "build" })
}

module.exports = {
    generatePlate,
}
