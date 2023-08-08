"use strict"
class Plate{
    constructor() {
        this.importFonts("./fonts/");
    }
    importFonts(dirPath) {
        const fs = require("fs");
        const path = require("path");
        const { registerFont } = require("canvas");
        fs.readdir("./fonts/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(font => {
                registerFont(`${dirPath}${font}`, {family: path.parse(`${dirPath}${font}`).name })    
            });
        }) 
    }
}
let a = new Plate()
async function generatePlate(plate,plateText,type,fontSize=270) {
    const { createCanvas, loadImage } = require("canvas");
    
    const fs = require("fs");
    const width = 1750;
    const height = 415;
    const canvas = createCanvas(width, height)
    const context = canvas.getContext("2d");
    plateText = decodeURI(plateText)
    
    await loadImage("./plates/tr_plate_1.png").then((image) => {
        context.drawImage(image, 0, 0);
        context.fillStyle = "#000";
        context.font = `${fontSize}px ${type}`;
        context.textAlign = "center";
        context.fillText(plateText, 950, 310);
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync("./public/image.png", buffer);
        console.log(plate,plateText.replace(/_/g, " "), "plate generated");
    });
}

module.exports = generatePlate;
// http://localhost/generateplate?plate=DE&plateText=KELES%2058&plateType=Deutschland_1&fontSize=308
