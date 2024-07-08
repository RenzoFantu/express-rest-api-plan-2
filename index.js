require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173', // Permitir solicitudes desde este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
  app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/v1', routes);

app.get('/', (req, res) => {
    res.send('todo OK');
})

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
})


//http:localhost:3000/v1