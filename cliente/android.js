var http = require('http');

var opcoes = {
  host : 'localhost',
  port: 3000,
  path: '/teste',
  method: 'get',
  headers: {
      'Accept' : 'application/json',
      // 'Content-type' : 'application/x-www-form-urlencoded'
      'Content-type' : 'application/json'
  }
}

var buffer_copor_response = [];
// var html = 'nome=jose';
// var json = {nome : 'jose'};
// var string_json = JSON.stringify(json);

var req = http.request(opcoes, function(res) {
  res.on('data', function(pedaco) {
    buffer_copor_response.push(pedaco);
  });
  res.on('end', function() {
    var corpo_response = Buffer.concat(buffer_copor_response).toString();
    console.log(corpo_response);
    console.log(res.statusCode);
  });
});

// req.write(string_json);
req.end();