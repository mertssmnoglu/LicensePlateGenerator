const router = require("express").Router()
const { generatePlate } = require("../../controllers/api.controller")

router.post("/generatePlate", generatePlate)

module.exports = router
