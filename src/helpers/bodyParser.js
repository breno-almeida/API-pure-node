function bodyParser(req, callback) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });

  req.on('end', function() {
    req.body = JSON.parse(body);
    callback();
  });
}

module.exports = bodyParser;
