const Vue = require('vue')

module.exports = function(context) {
    return new Vue({
        data: {
            url: context.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
}
