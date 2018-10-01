const fs = require('fs');
const path = require('path');

const productsRoute = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  if (request.method === 'GET') {
    fs.readFile(filePath, function (err, data) {
      if (err) {
         return console.error(err);
      }
      // console.log("Asynchronous read: " + data.toString());
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data.toString());
      response.end();
   });

  }

}

module.exports = productsRoute;
