const qs = require('querystring');

const saveProducts = user => {
  // получить файл с юзером
  // найти путь папки users
  // сохранить туда файл
};

const productsRoute = (request, response) => {
  if (request.method === 'GET') {
    let body = '';
    request.on('data', function (data) {
      body += data;
      console.log('Incoming data!!!!');
    });

    request.on('end', function () {
      const post = qs.parse(body);
      // use post['blah'], etc.
    });
  }

}


module.exports = productsRoute;