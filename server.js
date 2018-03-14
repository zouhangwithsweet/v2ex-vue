const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
// 引入第三方路由
const proxyConf = require('./config/proxy')
const headerConf = {
    referer: 'https://www.v2ex.com',
    host: 'www.v2ex.com'
}

let apiRoutes = express.Router()

for (let k in proxyConf) {
    app.get(k, function(req, res) {
        console.log(proxyConf[k])
        axios.get(proxyConf[k], {
            headers: headerConf,
            params: req.query
        }).then(response => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json(response.data)
        }).catch(e => {
            console.log(e)
        })
    })
}

app.use('/', apiRoutes)
app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
