const express = require('express');
const app = express();
const port = 8000;
const {exchange} = require('./exchange');

app.get('/', exchange);

app.use((err, _req, res, _next) => {
  const status = err.statusCode || 500;
  console.error(err.message);
  res.status(status).json({message: 'server error'});
})
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});