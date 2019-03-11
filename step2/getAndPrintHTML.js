var https = require('https');
var chunkString = "";

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      for (var i = 0; i < data.length; i++) {
        chunkString += data.charAt(i)
      }
        console.log(chunkString)
    });
  })
  // console.log(chunkString)
}

getAndPrintHTML()