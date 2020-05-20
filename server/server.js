const express = require('express');
const bodyParser = require('body-parser');
// Initialize http server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Handle / route
app.get('/api/location', (req, res) =>
    res.send('This is the location!')
)

// Launch the server on port 3000
const server = app.listen(5000, () => {
    const {
        address,
        port
    } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});