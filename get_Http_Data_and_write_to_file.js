const https = require('https');
const fs = require('fs');


https.get('https://en.wikipedia.org/wiki/Nodejs', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
  });
  
  
  fs.writeFile("./Nodejs.html",data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
  

}).on("error", (err) => {
  console.log("Error: " + err.message);
});