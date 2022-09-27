const app = require('./app')
require('dotenv').config()

const port = process.env.PORT_SERVER || 6000

app.listen(port, () => console.log(`server running on port ${port}`))




