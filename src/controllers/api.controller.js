const Canvas = require("../util/Canvas")

async function generatePlate(req,res) {
    const plate = new Canvas(1750, 415)
    await plate.fill("Deneme", "Deutschland_1")
    plate.export("abc")
}

module.exports = {
    generatePlate,
}
