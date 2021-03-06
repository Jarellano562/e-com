const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TURN ON ROUTES
app.use(routes);

//TURN ON CONNECTION TO DB AND SERVER
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(' Now listening ' + PORT));
});