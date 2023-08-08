const router = require("express").Router()

router.get("/", (req,res) => {
    res.status(200).send({
        message: "Welcome to Plate Generator"
    })
})

module.exports = router
