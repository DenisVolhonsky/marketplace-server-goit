const mainRoute = require('./main/main');
const productsRoute = require('./products/productsRoute');

const router = {
  '/products': productsRoute,
  '/me': mainRoute,
  default: mainRoute
};

module.exports = router;
