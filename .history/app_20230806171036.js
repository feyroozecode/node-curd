// init app 
const express = require('express')

// init server with copilot
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.listen(, () => {
    console.log('Example app listening on port 3000!')
})
