const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes');


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.ts');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);


app.listen(port, (err) => {
  if(err) {
    console.log(err)
  }
  console.log('Super :)')
})


