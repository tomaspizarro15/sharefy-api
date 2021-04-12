const app = require('./../index');
const mongoose = require('mongoose')
const config = require('config');

mongoose.connect(config.get('MONGO_URI'), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(foo => {
        app.listen(config.get('PORT'), () => {
            console.log("App listening in:>", config.get('PORT'))
        })
    })
    .catch((e) => {
        app.use((req, res, next) => {
            res.status(500).json({
                message: "API Execution failed returned a error status of : 500",
                error: e
            })
        })
    })