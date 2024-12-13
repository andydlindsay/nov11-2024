require('dotenv').config(); // populates process.env

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require the routers
const productRouter = require('./routers/product-router');
const blogpostRouter = require('./routers/blogpost-router');

// use the routers
// /products
// /admin/api/products
app.use('/admin/api/products', productRouter);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
