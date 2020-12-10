module.exports = conf => {
    conf.addFilter('md', string => {
        const twemoji = require('twemoji')
        const md = require('markdown-it')()
            .use(require('markdown-it-emoji'))
        md.renderer.rules.emoji = function(token, idx) {
            return twemoji.parse(token[idx].content);
        };
        return md.render(string)
    })
}
