var https = require('https');
var chunkString = "";

function getHTML (options, callback) {
  var requestOptions = {
    host: options.host,
    path: options.path
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      for (var i = 0; i < data.length; i++) {
        chunkString += data.charAt(i)
      }
        callback(chunkString)
    });
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)