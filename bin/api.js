const app = require('./../index');
const config = require('config')
app.listen(config.get('PORT') , () => {
    console.log("App listening in:>" , config.get('PORT'))
})
