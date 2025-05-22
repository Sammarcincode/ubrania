const mongoose = require('mongoose')

const connect = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    
    const url = "mongodb+srv://sammarcin1234:iIldASaEZDXbgyoZ@database1.j0m6bik.mongodb.net/?retryWrites=true&w=majority&appName=Database1"
    
    try {
        mongoose.connect(url, connectionParams)
        console.log('Connected to database')
    } catch(error) {
        console.log(error)
        console.log('could not connect to database')
    }
}

module.exports = connect