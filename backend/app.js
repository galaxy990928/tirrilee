const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req, res) => {
    res.send('Hello Geeks');
});

app.listen(4000, () => {
    console.log(`Server listening on http://localhost:4000`)
})