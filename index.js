//modules
const express = require('express');

//constants
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(__dirname + '/client/webapp'));
app.use(require('./routes'));

app.use('/test', (req, res) => res.send('Hello from Express Application!'));
app.listen(PORT, () => console.info(`Application is listening on port: ${PORT}`));
