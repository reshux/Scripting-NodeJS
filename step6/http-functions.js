var https = require('https')
var chunkString = ""

module.exports = function getHTML (options, callback) {
    /* Your code here */
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
};