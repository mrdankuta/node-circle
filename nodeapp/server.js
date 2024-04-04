const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const VERSION = '1.0';

app.get('/serverinfo', (req, res) => {
    const hostname = os.hostname();
    res.send(`Hostname: ${hostname}, Version: ${VERSION}`);
});

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './views/')
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});