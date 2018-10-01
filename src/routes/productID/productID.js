const fs = require('fs');
const path = require('path');

const productIDRoute = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  if (request.method === 'GET') {
    fs.readFile(filePath, function (err, data) {
      if (err) {
         return console.error(err);
      }
      // console.log("Asynchronous read: " + data.toString());
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
   });

  }
}

module.exports = productIDRoute;