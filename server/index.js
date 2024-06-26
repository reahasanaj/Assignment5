const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000
const clientPath = path.resolve(__dirname, '../client/dist')
app.use(express.static(clientPath))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.get('/test', (req, res) => {
    res.send('Server is operational');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})  