const http = require('http');
const fs = require('fs');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)  //can print any reload click info...
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/'){
        res.end('<h1> This is Codewith Shreesh</h1> <p> hey nice to see you </p>');
    }
    else if(req.url == '/about'){
        res.end('<h1>This is a Contro boy</h1> <p>Here is the full go of the event at my early stage.</p>');
    }
    else if(req.url == '/hello'){
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1> About Me is very interesting.</h1> <p> hello bacchon kese hoa p log</p>');
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
