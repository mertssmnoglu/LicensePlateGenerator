require("dotenv-safe/config")

const config = {
    PORT: process.env.PORT,
    DB: {
        _type: "MongoDB",
        connectionURL: process.env.MONGO_CONNECTION_URL,
    }
}

module.exports = config
