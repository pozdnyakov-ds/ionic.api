const express = require('express');
const bodyParser = require('body-parser');
const v1DeviceRouter = require('./v1/routes/deviceRoutes');

const app = express();
const PORT = process.env.PORT || 80;

app.use(bodyParser.json());
app.use('/api/v1/device', v1DeviceRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});