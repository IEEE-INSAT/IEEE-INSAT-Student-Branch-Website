const express = require('express')
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const dev = process.env.NODE_ENV !== 'production'

if (!dev && cluster.isMaster) {
    console.log(`Node cluster master ${process.pid} is running`);
  
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  
} else {
    const server = express()

    if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function(req, res, next) {
            var proto = req.headers["x-forwarded-proto"];
            if (proto === "https") {
                res.set({
                    'Strict-Transport-Security': 'max-age=31557600' // one-year
                });
                return next();
            }
            res.redirect("https://" + req.headers.host + req.url);
        });
    }

    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json())

    server.post('/api/contact', (req, res) => {
        const { name, email, phone, text } = req.body;
        mailer({name, email, phone, text}).then(() => {
            res.send('success')
        }).catch(error => {
            res.status(422).send(error)
        });
    })

    if (process.env.NODE_ENV == "production"){
        server.use(express.static('client/build'));
        const path = require('path');
        server.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
    }

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });

}