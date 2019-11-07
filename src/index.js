'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const router = require('./routes');
const { sequelize } = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// \/((?!login).)*

router(app);
sequelize.sync();

// this line resets all tables.
// sequelize.sync({ force: true });

app.listen(port, () => console.log(`Server is now running on port http://localhost:${port}`));
