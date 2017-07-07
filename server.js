const http = require('http');
const fs = require('fs');
const url = require('url')

// console.log()

let server = {
    start(){
        let port = 8089;
        if(/^\d+$/.test(process.argv[2])){
            port = process.argv[2];
        }

        const s = http.createServer(function (request, response) {


            let p = __dirname;
            if(url.parse(request.url).pathname=='/'){
                p +='/index.html'
            }else{
                p +=url.parse(request.url).pathname
            }
            response.writeHead(200);

            fs.readFile(p,{encoding:'utf-8'},function (err,data) {
                if(!err){
                    response.end(data);
                }else{
                    console.log(err)
                }

            })

        });

        s.listen(port,function () {
            console.log('server start and listen '+port)
        })



    },
    watcher(){
        // 例子，处理 fs.watch 监听器
        fs.watch(__dirname+'/index.html', { encoding: 'utf-8' }, (eventType, filename) => {
            if (filename){
                console.log(filename);
            }

        });
    }

}


exports.server = server;