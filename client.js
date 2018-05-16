const createApp = require('./app')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const context = {
    title: '666',
    meta: `
    <meta ...>
    <meta ...>
  `
}

server.get('*', (req, res) => {
    const context = {
        url: req.url
    }
    const app = createApp(context)
    renderer.renderToString(app, (err, html) => {
        if (err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return
        }
        res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        res.end(html)
    })
})

server.listen(9527)