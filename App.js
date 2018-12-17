var fs = require('fs');
fs.readFile(process.cwd()+"\\text.txt", 
     function(err,data)
            {
                if(err)
                    console.log(err)
                else
                    console.log(data.toString());
            });
            
