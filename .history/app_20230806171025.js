// init app 
const express = require('express')

// init server with copilot
const app = express()
const PORT 

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.listen(4000, () => {
    console.log('Example app listening on port 3000!')
})
