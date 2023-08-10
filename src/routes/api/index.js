const router = require("express").Router()
const { generatePlate } = require("../../controllers/api.controller")

router.get("/generatePlate", generatePlate)

module.exports = router
