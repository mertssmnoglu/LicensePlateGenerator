const fs = require("fs")

function checkFileDeletablity(path) {
    let time = Number(path.split("-")[1].split(".")[0])
    let dates = {
        current: new Date(),
        past: new Date(time),
        diff: () => {
            let result = new Date(
                dates.current.getTime() - dates.past.getTime()
            )
            let minute = result.getMinutes()
            minute += (result.getFullYear() - 1970) * 365 * 24 * 60
            minute += result.getUTCHours() * 60
            result = minute
            return result
        },
    }

    let deletable = dates.diff() >= 30 ? true : false
    if (deletable) {
        fs.rmSync(path, { retryDelay: 1000 })
    }
}

module.exports = checkFileDeletablity
