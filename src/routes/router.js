const mainRoute = require('./main/main');
const productsRoute = require('./products/productsRoute');
const imagesRoute = require('./images/images');
const createUser = require('./createUser/createUser');
const productIDRoute = require('./productID/productID');

const router = {
  '/products': productsRoute,
  '/images': imagesRoute,
  '/user/create': createUser,
  '/product/id': productIDRoute,
  default: mainRoute
};

module.exports = router;
