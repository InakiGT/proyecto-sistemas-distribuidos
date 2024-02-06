const express = require('express');
const cors = require('cors');
const routesApi = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

routesApi(app);

app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
});