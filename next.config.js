module.exports = {
    async rewrites() {
        return [{
            source: '/.well-known/webfinger',
            destination: '/static/webfinger.json',
        }]
    },
}