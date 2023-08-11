const fs = require("fs")
const path = require("path")
const { createCanvas, loadImage, registerFont } = require("canvas")

class Canvas {
    constructor(width, height) {
        this.importFonts("./assets/fonts/")
        this.width = width
        this.height = height
        this.canvas = createCanvas(this.width, this.height)
        this.context = this.canvas.getContext("2d")
    }

    importFonts(directory) {
        fs.readdir(directory, (err, files) => {
            if (err) return console.error(err)
            files.forEach((font) => {
                registerFont(`${directory}${font}`, {
                    family: path.parse(`${directory}${font}`).name,
                })
            })
        })
    }

    async fill(plateText, fontSize, fontFamily) {
        const myImg = loadImage("./plates/TR/01_Dikdortgen.png")
        const image = await myImg
        this.context.drawImage(image, 0, 0)
        this.context.fillStyle = "#000"
        this.context.font = `${fontSize}px ${fontFamily}`
        this.context.textAlign = "center"
        this.context.fillText(plateText, 950, 310)
        this.buffer = this.canvas.toBuffer("image/png")
        return image
    }

    export(fileName = "image") {
        const targetDir = "./build/"
        fs.writeFileSync(targetDir + fileName + ".png", this.buffer)
    }
}

module.exports = Canvas
