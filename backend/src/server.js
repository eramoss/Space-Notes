const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 6000

app.listen(port, () => console.log(`server running on port ${port}`))